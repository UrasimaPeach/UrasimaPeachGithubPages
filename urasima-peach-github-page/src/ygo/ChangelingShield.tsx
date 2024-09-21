import React, { useState, useEffect } from 'react';
import markdownit from 'markdown-it';

const ChangelingShield = () => {
  const [markdownText, setMarkdownText] = useState<string>("# 読み込み中")
  useEffect(() => {
    const markdownLoadFunction = async () => {
      const response = await fetch("/markdown/ChangelingShield.md");
      const text = await response.text();
      setMarkdownText(text);
    }
    markdownLoadFunction();
  },[])
  return (<div>
    <div
      dangerouslySetInnerHTML={{ __html: markdownit().render(markdownText) }}
    />
    </div>
  );
}

export default ChangelingShield;
