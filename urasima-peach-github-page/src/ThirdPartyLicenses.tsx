import React, { useState, useEffect } from 'react';

const ThirdPartyLicenses = () => {
  const [text, setText] = useState<string[]>(["# 読み込み中"])
  useEffect(() => {
    const textLoadFunction = async () => {
      const response = await fetch("/THIRD_PARTY_LICENSES.txt");
      const responseText = await response.text();
      setText(responseText.split("\n"));
    }
    textLoadFunction();
  },[])
  return (<div>
    <p>
      {text.map((row: string) => {
        return <span>{row}<br /></span>
      })}
    </p>
  </div>);
}

export default ThirdPartyLicenses;
