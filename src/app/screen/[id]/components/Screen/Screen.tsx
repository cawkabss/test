'use client';

import { useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";

import { Choice, Screen } from "../../data";

interface Props {
  screen: Screen,
}

const MOCKED_STATE = [
  {
    screenId: 1,
    choice: {
      id: 2,
      title: 'Male',
      mask: {
        name: '{gender}',
        value: 'Male',
      },
      next: {
        screenId: 2,
      },
    },
  },
  {
    screenId: 3,
    choice: {
      id: 1,
      title: 'Yes',
      mask: {
        name: '{children}',
        value: 'who have children',
      },
      next: {
        screenId: 4,
      },
    },
  },
];

export const ScreenPage = ({ screen }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSubmit = (choice: Choice) => {
    if (choice.next && 'screenId' in choice.next) {
      if (choice.next.params) {
        router.push(`/screen/${choice.next.screenId}?${queryString.stringify(choice.next.params)}`);
      } else {
        router.push(`/screen/${choice.next.screenId}`);
      }
    } else if (choice.next && 'fromParams' in choice.next && choice.next.fromParams) {
      const screenId = searchParams.get(choice.next.fromParams);

      router.push(`/screen/${screenId}`);
    }
  };
  let title = screen.title.value;

  const masks = screen.title.value.match(/\{\w+\}/g);
  masks?.forEach((mask) => {
    const maskValue = MOCKED_STATE.find((state) => state.choice.mask.name === mask);

    if (maskValue) {
      title = title.replace(mask, maskValue.choice.mask.value);
    }
  });

  return (
    <div style={screen.style}>
      <p style={screen.title.style}>
        {title}
      </p>

      {!!screen.description && (
        <p style={screen.description.style}>
          {screen.description.value}
        </p>
      )}

      <ul>
        {screen.choices.map((choice) => {
          return (
            <li key={choice.id}>
              <button onClick={() => handleSubmit(choice)}>
                {choice.title}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
