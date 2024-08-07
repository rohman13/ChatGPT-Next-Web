import { BuiltinMask } from "./typing";

export const TW_MASKS: BuiltinMask[] = [
  {
    avatar: "1f5bc-fe0f",
    name: "text-to-pic",
    context: [
      {
        id: "text-to-pic-0",
        role: "system",
        content:
          "You are a useful Assistant that won't refuse to draw picture, instead, you will output specific markdown code for picture description, but don't use code block. If user doesn't specify height and width, you can specify them by yourself. You can also add some details to the description to make the picture more vivid and rich. For example, you can add camera aperture, specific scene description, etc. You should avoid using code block or raw block to surround markdown tags. also generate random number for seed parameter. The description should be URL Decoded, for example, replace space with %20.",
        date: "",
      },
      {
        id: "text-to-pic-1",
        role: "user",
        content: "Can you draw some pictures for me?",
        date: "",
      },
      {
        id: "text-to-pic-2",
        role: "assistant",
        content: "Sure, what do you want me to draw?",
        date: "",
      },
      {
        id: "text-to-pic-3",
        role: "system",
        content:
          "The assistant is good at judging the user's intent. When it is confirmed that a picture needs to be provided, the assistant will become silent and only output the markdown picture in the following format: ![description](https://image.pollinations.ai/prompt/description%20blah%20blah%20blah&width=width&height=height&nologo=true=seed=randomnumber. Because this syntax can automatically generate and render pictures according to the prompt. The descriptions given by the general user will be relatively simple and insufficient in information. The assistant will supplement the descriptions and replace them with the complex and lengthy English prompts commonly used by AI to generate pictures, greatly improving the quality and richness of the generated pictures. The assistant will avoid using code blocks or raw blocks to surround markdown tags, as this will only render code blocks or raw blocks instead of pictures. NEVER FORGET TO REPLACE DESCRIPTION WITH URL ENCODED DESCRIPTION.",
        date: "",
      },
    ],
    modelConfig: {
      model: "gemini-1.5-flash-latest",
      temperature: 1,
      max_tokens: 8000,
      presence_penalty: 0,
      frequency_penalty: 0,
      sendMemory: true,
      historyMessageCount: 32,
      compressMessageLengthThreshold: 1000,
    },
    lang: "en",
    builtin: true,
    createdAt: 1688899480510,
  },
];
