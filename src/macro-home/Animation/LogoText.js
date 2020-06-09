// Components==============
import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
// =========================

const Svg = styled.svg`
  width: 200px;
  margin-top: ${({ theme: { spacing } }) => spacing[4]};
`;

export default function LogoText() {
  return (
    <Svg width="300" height="36" viewBox="0 0 300 36" fill="none">
      <motion.g variants={framerParent} animate="mount" initial="unMount">
        <motion.path
          variants={framerPath}
          d="M10.5488 34.918H1V1.72632H10.5488C12.8787 1.72632 15.0559 2.14646 17.0802 3.02496C19.1046 3.90345 20.8234 5.1257 22.2748 6.72991C23.688 8.25772 24.7575 10.0147 25.4832 12.0009C26.2471 13.987 26.5909 16.0878 26.5909 18.2649C26.5909 20.4802 26.2089 22.5809 25.4832 24.5289C24.7193 26.5151 23.6498 28.2721 22.2748 29.8381C20.8234 31.4805 19.0664 32.7409 17.0802 33.5812C15.0941 34.4597 12.9169 34.918 10.5488 34.918ZM3.32991 32.5881H10.587C14.7121 32.5881 18.0733 31.1367 20.6324 28.2339C21.8164 26.9352 22.7331 25.4456 23.3443 23.7268C23.9554 22.008 24.2991 20.1746 24.2991 18.2267C24.2991 16.3169 23.9936 14.5217 23.3443 12.803C22.7331 11.0842 21.8164 9.59456 20.6324 8.29592C17.9969 5.46946 14.6739 4.05623 10.587 4.05623H3.32991V32.5881V32.5881Z"
          fill="#E1C598"
          stroke="#E1C598"
          strokeWidth="0.5"
          strokeMiterlimit="10"
        />
        <motion.path
          variants={framerPath}
          d="M47.0253 35.2618C45.3448 35.2618 43.7406 34.918 42.2127 34.2687C40.6467 33.6194 39.3099 32.6645 38.0876 31.4423C36.9036 30.2964 35.9869 28.9214 35.3758 27.3554C34.7265 25.7894 34.4209 24.147 34.4209 22.39V1.72632H36.7126V22.39C36.7126 23.8032 36.98 25.1782 37.5147 26.4769C38.0495 27.7755 38.7752 28.8832 39.73 29.8381C40.7231 30.8311 41.8308 31.595 43.0912 32.1298C44.3517 32.6645 45.6503 32.9319 47.0253 32.9319C48.4386 32.9319 49.7372 32.6645 50.9977 32.1298C52.2581 31.595 53.3658 30.8311 54.3588 29.8381C55.3137 28.8832 56.0394 27.7755 56.5742 26.4769C57.1089 25.1782 57.3763 23.8032 57.3763 22.39V1.72632H59.668V22.39C59.668 24.1088 59.3624 25.7894 58.7131 27.3554C58.0638 28.9214 57.1853 30.2964 55.9631 31.4423C54.779 32.6645 53.404 33.6194 51.8762 34.2687C50.3865 34.918 48.7441 35.2618 47.0253 35.2618Z"
          fill="#E1C598"
          stroke="#E1C598"
          strokeWidth="0.5"
          strokeMiterlimit="10"
        />
        <motion.path
          variants={framerPath}
          d="M90.6062 22.0462C91.4847 23.3067 91.9049 24.6817 91.9049 26.1713C91.9049 27.4318 91.5993 28.6158 90.9882 29.7617C90.3771 30.9075 89.4986 31.9006 88.3145 32.7409C85.9464 34.4597 83.1582 35.3 79.988 35.3C78.4219 35.3 76.9323 35.0708 75.4809 34.6507C74.0677 34.1923 72.769 33.5812 71.6614 32.7791C69.7134 31.3659 68.5294 29.6089 68.1474 27.5082L70.3245 26.2859C70.4391 28.1575 71.3558 29.6853 73.0746 30.8693C73.9531 31.5568 74.9844 32.0534 76.2066 32.4353C77.3907 32.7791 78.6511 32.9701 79.988 32.9701C82.6998 32.9701 84.9915 32.2826 86.8631 30.8693C88.6583 29.5325 89.575 27.9665 89.575 26.1713C89.575 25.1018 89.2312 24.1088 88.5819 23.1921C87.9326 22.2754 86.9777 21.4733 85.7936 20.8622C84.686 20.2892 82.6616 19.8309 79.7588 19.4871C79.5296 19.4489 78.6511 19.3343 77.1615 19.067C75.6719 18.8378 74.4114 18.4559 73.342 17.9593C71.6614 17.1572 70.3627 16.0496 69.4079 14.7127C68.453 13.3759 67.9946 11.9245 67.9946 10.3585C67.9946 9.09801 68.3002 7.91396 68.9495 6.8063C69.5606 5.69863 70.4773 4.70555 71.6232 3.86525C72.7308 3.06315 74.0295 2.41383 75.4427 1.99369C76.8559 1.53534 78.3837 1.34436 79.9498 1.34436C83.12 1.34436 85.87 2.18466 88.2763 3.90345C90.2625 5.39307 91.4083 7.15005 91.7521 9.09801L89.575 10.3203C89.5368 9.47996 89.3076 8.63967 88.8493 7.87576C88.3909 7.11185 87.7416 6.38614 86.9013 5.73682C85.9846 5.0493 84.9151 4.55276 83.7311 4.17081C82.547 3.82705 81.2866 3.63608 79.988 3.63608C78.6893 3.63608 77.4289 3.82705 76.2448 4.17081C75.0226 4.51457 73.9913 5.0493 73.1128 5.73682C72.2343 6.38614 71.5468 7.11186 71.0884 7.91396C70.6301 8.71606 70.3627 9.55635 70.3627 10.3967C70.3627 11.4661 70.7447 12.4974 71.5468 13.5287C72.3107 14.5599 73.3038 15.362 74.4496 15.9732C75.1753 16.3169 75.9392 16.5461 76.8177 16.6989C77.6962 16.8516 78.8039 17.0044 80.1789 17.1954C80.4081 17.2336 81.0192 17.31 81.9741 17.4628C82.929 17.6156 83.8457 17.7683 84.7242 18.0357C85.6027 18.2649 86.3666 18.5705 86.9777 18.9142C88.5055 19.7163 89.7278 20.7858 90.6062 22.0462Z"
          fill="#E1C598"
          stroke="#E1C598"
          strokeWidth="0.5"
          strokeMiterlimit="10"
        />
        <motion.path
          variants={framerPath}
          d="M125.746 1.72632V4.05623H112.645V34.8798H110.315V4.05623H97.1375V1.72632H125.746V1.72632Z"
          fill="#E1C598"
          stroke="#E1C598"
          strokeWidth="0.5"
          strokeMiterlimit="10"
        />
        <motion.path
          variants={framerPath}
          d="M182.046 34.918V8.67785L167.34 29.6471L152.444 8.60146V34.8798H150.153V1.30615L167.34 25.5984L184.337 1.30615V34.8798H182.046V34.918Z"
          fill="#E1C598"
          stroke="#E1C598"
          strokeWidth="0.5"
          strokeMiterlimit="10"
        />
        <motion.path
          variants={framerPath}
          d="M194.192 34.918V1.72632H215.696V4.05623H196.484V17.119H211.456V19.4489H196.484V32.5117H215.696V34.918H194.192Z"
          fill="#E1C598"
          stroke="#E1C598"
          strokeWidth="0.5"
          strokeMiterlimit="10"
        />
        <motion.path
          variants={framerPath}
          d="M233.953 34.918H224.404V1.72632H233.953C236.283 1.72632 238.46 2.14646 240.485 3.02496C242.509 3.90345 244.228 5.1257 245.679 6.72991C247.092 8.25772 248.162 10.0147 248.887 12.0009C249.651 13.987 249.995 16.0878 249.995 18.2649C249.995 20.4802 249.613 22.5809 248.887 24.5289C248.124 26.5151 247.054 28.2721 245.679 29.8381C244.228 31.4805 242.471 32.7409 240.485 33.5812C238.498 34.4597 236.321 34.918 233.953 34.918ZM226.696 32.5881H233.953C238.078 32.5881 241.439 31.1367 243.999 28.2339C245.183 26.9352 246.099 25.4456 246.71 23.7268C247.321 22.008 247.665 20.1746 247.665 18.2267C247.665 16.3169 247.36 14.5217 246.71 12.803C246.099 11.0842 245.183 9.59456 243.999 8.29592C241.363 5.46946 238.04 4.05623 233.953 4.05623H226.696V32.5881Z"
          fill="#E1C598"
          stroke="#E1C598"
          strokeWidth="0.5"
          strokeMiterlimit="10"
        />
        <motion.path
          variants={framerPath}
          d="M258.36 34.918V1.72632H260.652V34.918H258.36Z"
          fill="#E1C598"
          stroke="#E1C598"
          strokeWidth="0.5"
          strokeMiterlimit="10"
        />
        <motion.path
          variants={framerPath}
          d="M274.975 26.4769L271.041 34.918H268.482L284.104 1.34436L298.847 34.918H296.364L292.621 26.4769H274.975ZM283.989 6.99727L276.006 24.1852H291.59L283.989 6.99727Z"
          fill="#E1C598"
          stroke="#E1C598"
          strokeWidth="0.5"
          strokeMiterlimit="10"
        />
      </motion.g>
    </Svg>
  );
}

const framerParent = {
  mount: {
    transition: {
      staggerDirection: 0.6,
    },
  },
  unMount: {},
};

const framerPath = {
  mount: { pathLength: 1 },
  unMount: { pathLength: 0 },
};