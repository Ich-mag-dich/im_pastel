import React from "react";
import ButtonBase, { IButtonProps } from "./ButtonBase";

const YoutubeButton = (props: IButtonProps) => {
  return (
    <ButtonBase
      href={`https://www.youtube.com/${props.href}`}
      name="Youtube"
      primary_color={props.primary_color}
      secondary_color="youtube"
      target="blank"
    />
  );
};

export default YoutubeButton;
