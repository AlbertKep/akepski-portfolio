import { useTheme } from "styled-components";

const Logo = () => {
  const theme = useTheme();

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="65"
        height="65"
        viewBox="0 0 65 65"
      >
        <path
          id="Path_45"
          data-name="Path 45"
          d="M2062.684,3438.811h-32.5l-16.25,13v52h16.25l16.25-13,16.25,13h16.25v-52Zm0,42.057-16.25-13-16.25,13v-13l16.25-13,16.25,13Z"
          transform="translate(-2013.934 -3438.811)"
          fill={theme.state.menuIconColor}
        />
      </svg>
    </>
  );
};

export default Logo;
