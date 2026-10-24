const css = `
    *, ::after, ::before {
      box-sizing: border-box;
      color: inherit;
      font: inherit;
      margin: 0;
      padding: 0;
    }
    
    :root {
      line-height: 1.2;
      overflow-wrap: break-word;
      tab-size: 4;
      word-break: break-word;
    }
    
    a {
      text-decoration: none;
    }
    
    body, html {
      height: 100%;
    }
    
    button {
      background: none;
      border: 0;
      cursor: pointer;
    }
    
    canvas, img, picture, video {
      display: block;
      max-width: 100%;
    }
    
    menu, ol, ul {
      list-style: none;
    }
    
    table {
      border-collapse: collapse;
      border-spacing: 0;
    }
`
const el = document.createElement("style")
el.textContent = css
document.head.appendChild(el)
