# Prompt Filter

Prompt Filter is a Next.js and Tailwind CSS v3.0 app that helps you filter and organize prompts containing special characters like (), (()), [], and [[]]. The app allows you to break down your prompts into individual tokens, which can be manipulated and rearranged as needed.

inspired by [NapoII's Prompt-Filter](https://github.com/NapoII/Prompt-Filter)

## Features

- Break down prompts into tokens using commas as separators
- Preserve special characters like (), (()), [], and [[]] in tokens
- Click on token buttons to add them to the output box in the order you desire
- Control buttons:
  - Copy: Copy the content in the output box to the clipboard
  - Delete: Clear the token buttons and content in the output box
  - Save: Save the content in the output box to a .txt file and download it
  - Shuffle: Shuffle the content in the output box
  - Duplicate: Remove duplicate tokens from the token buttons
- Dark mode toggle with a smooth transition between light and dark themes
- Responsive design for different screen sizes

## Installation

1. Clone the repository:

```
git clone https://github.com/axsddlr/prompt-filter.git
```

2. Change to the project directory:

```
cd prompt-filter
```

3. Install dependencies:

```
npm install
```

4. Run the development server:

```
npm run dev
```

5. Open your browser and visit `http://localhost:3000` to see the app.

## Contributing

Feel free to submit issues or pull requests on the [GitHub repository](https://github.com/axsddlr/prompt-filter).
