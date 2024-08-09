import { SCREENS, Screen } from './data';
import { ScreenPage } from "./components/Screen";

interface RouteParams {
  id: string
}

interface Props {
  params: RouteParams,
}

const convertScreensListToMap = (screens: Screen[]) => {
  const screenMap = new Map<number, Screen>();

  screens.forEach((screen) => screenMap.set(screen.id, screen));

  return screenMap;
};

export async function generateStaticParams() {
  return SCREENS.map((screen) => ({ id: String(screen.id) }));
}

const Page = ({ params }: Props) => {
  const screenMap = convertScreensListToMap(SCREENS);

  const screen = screenMap.get(Number(params.id));

  if (screen) {
    return (
      <ScreenPage screen={screen} />
    );
  }

  return null;
};

export default Page;
