import React, { ComponentProps } from "react";

export const FAQ = ({
  size,
  fill = "currentColor",
  ...rest
}: ComponentProps<"svg"> & { size: string | number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    {...rest}
  >
    <path
      d="M14 15C14.2833 15 14.5292 14.8958 14.7375 14.6875C14.9458 14.4792 15.05 14.2333 15.05 13.95C15.05 13.6667 14.9458 13.4208 14.7375 13.2125C14.5292 13.0042 14.2833 12.9 14 12.9C13.7167 12.9 13.4708 13.0042 13.2625 13.2125C13.0542 13.4208 12.95 13.6667 12.95 13.95C12.95 14.2333 13.0542 14.4792 13.2625 14.6875C13.4708 14.8958 13.7167 15 14 15ZM14 11.8C14.1833 11.8 14.3542 11.7333 14.5125 11.6C14.6708 11.4667 14.7667 11.2917 14.8 11.075C14.8333 10.875 14.9042 10.6917 15.0125 10.525C15.1208 10.3583 15.3167 10.1333 15.6 9.85C16.1 9.35 16.4333 8.94583 16.6 8.6375C16.7667 8.32917 16.85 7.96667 16.85 7.55C16.85 6.8 16.5875 6.1875 16.0625 5.7125C15.5375 5.2375 14.85 5 14 5C13.45 5 12.95 5.125 12.5 5.375C12.05 5.625 11.6917 5.98333 11.425 6.45C11.325 6.61667 11.3167 6.79167 11.4 6.975C11.4833 7.15833 11.625 7.29167 11.825 7.375C12.0083 7.45833 12.1875 7.46667 12.3625 7.4C12.5375 7.33333 12.6833 7.21667 12.8 7.05C12.95 6.83333 13.125 6.67083 13.325 6.5625C13.525 6.45417 13.75 6.4 14 6.4C14.4 6.4 14.725 6.5125 14.975 6.7375C15.225 6.9625 15.35 7.26667 15.35 7.65C15.35 7.88333 15.2833 8.10417 15.15 8.3125C15.0167 8.52083 14.7833 8.78333 14.45 9.1C13.9667 9.51667 13.6583 9.8375 13.525 10.0625C13.3917 10.2875 13.3083 10.6167 13.275 11.05C13.2583 11.25 13.3208 11.425 13.4625 11.575C13.6042 11.725 13.7833 11.8 14 11.8ZM8 18C7.45 18 6.97917 17.8042 6.5875 17.4125C6.19583 17.0208 6 16.55 6 16V4C6 3.45 6.19583 2.97917 6.5875 2.5875C6.97917 2.19583 7.45 2 8 2H20C20.55 2 21.0208 2.19583 21.4125 2.5875C21.8042 2.97917 22 3.45 22 4V16C22 16.55 21.8042 17.0208 21.4125 17.4125C21.0208 17.8042 20.55 18 20 18H8ZM8 16H20V4H8V16ZM4 22C3.45 22 2.97917 21.8042 2.5875 21.4125C2.19583 21.0208 2 20.55 2 20V7C2 6.71667 2.09583 6.47917 2.2875 6.2875C2.47917 6.09583 2.71667 6 3 6C3.28333 6 3.52083 6.09583 3.7125 6.2875C3.90417 6.47917 4 6.71667 4 7V20H17C17.2833 20 17.5208 20.0958 17.7125 20.2875C17.9042 20.4792 18 20.7167 18 21C18 21.2833 17.9042 21.5208 17.7125 21.7125C17.5208 21.9042 17.2833 22 17 22H4Z"
      fill={fill}
    />
  </svg>
);