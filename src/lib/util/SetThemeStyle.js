/**
 * @description theme 설정
 * @param {Object} seomySetting 
 * @param {document.documentElement} root
 */
export const SetThemeStyle = (themeData) => {
    const root = document.documentElement;
    
    if (themeData !== null) {
        for (const [key, value] of Object.entries(themeData)) {
            root.style.setProperty(`--tp-${key}`, value);
        }
        
        root.style.setProperty("--tp-theme-blue", themeData.main);

        // .brand-bg-3 클래스의 내부 프로퍼티(예: background)를 변경하기 위해 새 스타일 규칙 추가
        const styleElement = document.createElement('style');
        styleElement.textContent = `
            .brand-bg-3 {
                ${themeData.defaultGradientAreaHtml};
            }
        `;
        document.head.appendChild(styleElement);
        return
    }

    throw new Error("themeData is null");
}