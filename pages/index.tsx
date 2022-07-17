import type { NextPage } from "next";
import Head from "next/head";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-3xl font-bold underline"> Hello World</h1>
      <ThemeChanger />
    </div>
  );
};

export default Home;

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  });

  if(!mounted){
    return null;
  }

  return (
    <div>
      <button
        onClick={() => setTheme("light")}
        className="rounded-full p-2 m-2 bg-gradient-to-tr from-gray-200 to-yellow-400 dark:from-red-200 dark:to-orange-400"
      >
        Light Mode
      </button>
      <button
        onClick={() => setTheme("dark")}
        className="rounded-full p-2 bg-gradient-to-tr from-violet-500 to-fuchsia-500"
      >
        Dark Mode
      </button>
    </div>
  );
};
