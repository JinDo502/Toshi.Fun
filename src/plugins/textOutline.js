export default function textOutlinePlugin({ addUtilities, theme }) {
  const colors = {
    white: theme('colors.white', '#fff'),
    primary: theme('colors.primary', '#ffa600'),
    bg: theme('colors.bg', '#202536'),
  };

  const widths = {
    1: '1px',
    2: '2px',
    3: '3px',
    4: '4px',
  };

  const newUtilities = {};

  for (const colorName in colors) {
    for (const widthName in widths) {
      const className = `.text-outline-${colorName}-${widthName}`;
      const shadowWidth = widths[widthName];
      const shadowColor = colors[colorName];

      newUtilities[className] = {
        'text-shadow': `
          -${shadowWidth} -${shadowWidth} 0 ${shadowColor}, /* 左上 */
           ${shadowWidth} -${shadowWidth} 0 ${shadowColor}, /* 右上 */
          -${shadowWidth}  ${shadowWidth} 0 ${shadowColor}, /* 左下 */
           ${shadowWidth}  ${shadowWidth} 0 ${shadowColor}, /* 右下 */
          -${shadowWidth}  0px 0 ${shadowColor},            /* 左中 */
           ${shadowWidth}  0px 0 ${shadowColor},            /* 右中 */
           0px -${shadowWidth} 0 ${shadowColor},            /* 上中 */
           0px  ${shadowWidth} 0 ${shadowColor}             /* 下中 */
        `
          .replace(/\s+/g, ' ')
          .trim(),
      };
    }
  }

  addUtilities(newUtilities, ['responsive', 'hover']);
}
