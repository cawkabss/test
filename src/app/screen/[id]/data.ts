interface ChoiceMask {
  name: string,
  value: string,
}

export interface Choice {
  id: number,
  title: string,
  mask?: ChoiceMask,
  next?: {
    screenId: number,
    params?: {
      [key: string]: string | number,
    },
  } | {
    fromParams?: string,
  }
}

export interface Screen {
  id: number,
  style?: {
    [key: string]: string,
  },
  title: {
    style?: {
      [key: string]: string,
    },
    value: string,
  },

  description?: {
    style?: {
      [key: string]: string,
    },
    value: string,
  },

  choices: Choice[],
}

export const SCREENS: Screen[] = [
  {
    id: 1,
    title: {
      value: 'Select your gender:',
    },
    choices: [
      {
        id: 1,
        title: 'Female',
        mask: {
          name: '{gender}',
          value: 'Female',
        },
        next: {
          screenId: 2,
        },
      },
      {
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
    ],
  },

  {
    id: 2,
    title: {
      value: 'So we can get to know you better, tell us about your relationship status.',
    },
    choices: [
      {
        id: 1,
        title: 'Single',
        next: {
          screenId: 3,
        },
      },
      {
        id: 1,
        title: 'In a relationship',
        next: {
          screenId: 10,
        },
      },
    ],
  },

  {
    id: 3,
    title: {
      value: 'Are you a single parent?',
    },
    choices: [
      {
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
      {
        id: 2,
        title: 'No',
        mask: {
          name: '{children}',
          value: '',
        },
        next: {
          screenId: 4,
        },
      },
    ],
  },

  {
    id: 4,
    title: {
      value: '{gender} {children} need a slightly different approach to improve their relationship. Which statement best describes you?',
    },
    choices: [
      {
        id: 1,
        title: 'I’m very unhappy with how things are going in my relationship',
        next: {
          screenId: 5,
        },
      },
      {
        id: 2,
        title: 'I’m unhappy with parts of my relationship, but some things are working well',
        next: {
          screenId: 5,
        },
      },
      {
        id: 3,
        title: 'I’m generally happy in my relationship',
        next: {
          screenId: 5,
        },
      },
    ],
  },

  {
    id: 5,
    title: {
      value: 'Do you tend to overthink?',
    },
    choices: [
      {
        id: 1,
        title: 'Yes',
        next: {
          screenId: 6,
          params: {
            screenId: 7,
          },
        },
      },
      {
        id: 2,
        title: 'No',
        next: {
          screenId: 6,
          params: {
            screenId: 8,
          },
        },
      },
    ],
  },

  {
    id: 6,
    style: {
      background: '#322d73',
    },
    title: {
      value: 'So how does it work?',
      style: {
        color: '#fff',
      },
    },
    description: {
      value: 'We analyze hundreds of data points to create your unique astrological blueprint. This is combined with AI to tailor-make your astrological insights, based on your answers. We’re going to change your relationship with astrology.',
      style: {
        color: '#fff',
      },
    },
    choices: [
      {
        id: 1,
        title: 'Next',
        next: {
          fromParams: 'screenId',
        },
      },
    ],
  },

  {
    id: 7,
    title: {
      value: 'What is most important to you?',
    },
    choices: [
      {
        id: 1,
        title: 'Success',
        next: {
          screenId: 9,
        },
      },
      {
        id: 2,
        title: 'Romance',
        next: {
          screenId: 9,
        },
      },
      {
        id: 3,
        title: 'Stability',
        next: {
          screenId: 9,
        },
      },
      {
        id: 4,
        title: 'Freedom',
        next: {
          screenId: 9,
        },
      },
    ],
  },

  {
    id: 8,
    title: {
      value: 'Is emotional control tricky for you?',
    },
    choices: [
      {
        id: 1,
        title: 'Yes',
        next: {
          screenId: 9,
        },
      },
      {
        id: 2,
        title: 'Sometimes',
        next: {
          screenId: 9,
        },
      },
      {
        id: 3,
        title: 'Rarely',
        next: {
          screenId: 9,
        },
      },
      {
        id: 4,
        title: 'Not at all',
        next: {
          screenId: 9,
        },
      },
    ],
  },

  {
    id: 9,
    title: {
      value: 'Where did you hear about us?',
    },
    choices: [
      {
        id: 1,
        title: 'Poster or Billboard',
      },
      {
        id: 1,
        title: 'Instagram',
      },
      {
        id: 1,
        title: 'Direct Mail or Package Insert',
      },
      {
        id: 1,
        title: 'Online TV or Streaming TV',
      },
    ],
  },

  {
    id: 10,
    title: {
      value: 'Are you a parent?',
    },
    choices: [
      {
        id: 1,
        title: 'Yes',
        next: {
          screenId: 11,
        }
      },
      {
        id: 2,
        title: 'No',
        next: {
          screenId: 11,
        }
      },
    ],
  },

  {
    id: 11,
    title: {
      value: 'Single {gender} {children} need a slightly different approach to find their perfect partner. But first, how did you feel in your last relationship?',
    },
    choices: [
      {
        id: 1,
        title: 'I was unhappy with low things were going in my relationship',
        next: {
          screenId: 12,
        }
      },
      {
        id: 2,
        title: 'I was unhappy with parts of my relationship, but some thing were working',
        next: {
          screenId: 12,
        }
      },
      {
        id: 3,
        title: 'I was generally happy with my relationship',
        next: {
          screenId: 12,
        }
      },
      {
        id: 4,
        title: 'I’ve never been in a relationship',
        next: {
          screenId: 12,
        }
      },
    ],
  },

  {
    id: 12,
    title: {
      value: 'Is your partner an introvert or extrovert?',
    },
    choices: [
      {
        id: 1,
        title: 'Introvert',
        next: {
          screenId: 13,
        }
      },
      {
        id: 2,
        title: 'Extrovert',
        next: {
          screenId: 13,
        }
      },
      {
        id: 3,
        title: 'A bit of both',
        next: {
          screenId: 13,
        }
      },
    ],
  },

  {
    id: 13,
    title: {
      value: 'What is your partner’s gender?',
    },
    choices: [
      {
        id: 1,
        title: 'Male',
        next: {
          screenId: 14,
        }
      },
      {
        id: 2,
        title: 'Female',
        next: {
          screenId: 14,
        }
      },
    ],
  },

  {
    id: 14,
    title: {
      value: 'Do you agree with the statement below?',
    },
    description: {
      value: '“My partner and I make sex a priority in our relationship”',
    },
    choices: [
      {
        id: 1,
        title: 'Strongly agree',
        next: {
          screenId: 15,
        }
      },
      {
        id: 2,
        title: 'Agree',
        next: {
          screenId: 15,
        }
      },
      {
        id: 3,
        title: 'Neutral',
        next: {
          screenId: 15,
        }
      },
      {
        id: 4,
        title: 'Disagee',
        next: {
          screenId: 15,
        }
      },
      {
        id: 5,
        title: 'Strongly disagree',
        next: {
          screenId: 15,
        }
      },
    ],
  },

  {
    id: 15,
    title: {
      value: 'When you think about your relationship goals, you feel...?',
    },
    choices: [
      {
        id: 1,
        title: 'Optimistic! They are totally doable, with some guidance.',
        next: {
          screenId: 9,
        }
      },
      {
        id: 2,
        title: 'Cautious. I’ve struggled before, but I’m hopeful.',
        next: {
          screenId: 9,
        }
      },
      {
        id: 3,
        title: 'I’m feeling a little anxious, honestly.',
        next: {
          screenId: 9,
        }
      },
    ],
  },
];
