// pages/index.js
import { useState } from "react";
import InputBox from "@/components/InputBox";
import TokenButton from "@/components/TokenButton";
import OutputBox from "@/components/OutputBox";
import ControlButtons from "@/components/ControlButtons";
import ThemeSwitch from "@/components/ThemeSwitch";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Home = () => {
  const [tokens, setTokens] = useState([]);
  const [outputTokens, setOutputTokens] = useState([]);

  const handleTokenClick = (token) => {
    setOutputTokens([...outputTokens, token]);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(outputTokens.join(" "));
  };

  const handleDelete = () => {
    setTokens([]);
    setOutputTokens([]);
  };

  const handleShuffle = () => {
    let shuffledOutputTokens = [...outputTokens];
    for (let i = shuffledOutputTokens.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledOutputTokens[i], shuffledOutputTokens[j]] = [
        shuffledOutputTokens[j],
        shuffledOutputTokens[i],
      ];
    }
    setOutputTokens(shuffledOutputTokens);
  };

  const handleRemoveDuplicates = () => {
    const uniqueTokens = [...new Set(tokens)];
    setTokens(uniqueTokens);
  };

  const handleSave = () => {
    if (outputTokens.length === 0) {
      alert("Output box is empty. Cannot save an empty file.");
      return;
    }

    const blob = new Blob([outputTokens.join(", ")], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "prompt.txt";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen p-8 flex flex-col">
      <Header />
      <div className="fixed top-4 right-4">
        <ThemeSwitch />
      </div>
      <div className="mt-16 flex-grow">
        <div className="w-full max-w-2xl mx-auto">
          <InputBox onTokensGenerated={setTokens} />
        </div>
        <div className="w-full max-w-2xl mx-auto">
          <div className="flex flex-wrap justify-center">
            {tokens.map((token, index) => (
              <TokenButton
                key={index}
                token={token}
                onTokenClick={handleTokenClick}
              />
            ))}
          </div>
        </div>
        <div className="w-full max-w-2xl mx-auto">
          <OutputBox tokens={outputTokens} />
        </div>
        <div className="flex justify-center mt-4">
          <ControlButtons
            onCopy={handleCopy}
            onDelete={handleDelete}
            onSave={handleSave}
            onShuffle={handleShuffle}
            onRemoveDuplicates={handleRemoveDuplicates}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
