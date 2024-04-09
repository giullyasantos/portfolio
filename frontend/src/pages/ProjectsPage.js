import React from 'react'; 
import '../styles/styles.css'


const ProjectsPage = () => {
  return (
    <div>
      <header className="navBar">
        <button className="menuButton">
          <svg viewBox="0 0 48 48" width="48" height="48">
            <circle className="corners" cx="12" cy="12" r="3" ></circle>
            <circle className="corners" cx="36" cy="12" r="3" ></circle>
            <circle className="corners" cx="12" cy="36" r="3" ></circle>
            <circle className="corners" cx="36" cy="36" r="3" ></circle>
            <circle className="circles" cx="24" cy="12" r="3" ></circle>
            <circle className="circles" cx="12" cy="24" r="3" ></circle>
            <circle className="circles" id="middle" cx="24" cy="24" r="3" ></circle>
            <circle className="circles" cx="36" cy="24" r="3" ></circle>
            <circle className="circles" cx="24" cy="36" r="3" ></circle>
          </svg>
        </button>      
      </header>
      <div id="projects" className="myProjects">
        <svg width="767" height="106" viewBox="0 0 767 106" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="767" height="106" fill="none"/>
          <g clip-path="url(#clip0_0_1)">
            <path d="M87.0023 72.8C85.9357 73.6 84.8023 74.3667 83.6023 75.1C82.5357 75.7 81.3357 76.2667 80.0023 76.8C78.7357 77.2667 77.3357 77.5 75.8023 77.5C74.069 77.5 72.6023 77.2 71.4023 76.6C70.3357 77.7333 69.069 78.6667 67.6023 79.4C66.1357 80.2 64.569 80.6 62.9023 80.6C61.7023 80.6 60.5023 80.4 59.3023 80C58.1023 79.6667 56.9357 79.2333 55.8023 78.7C54.7357 78.1 53.7357 77.4667 52.8023 76.8C51.9357 76.0667 51.2357 75.3333 50.7023 74.6C50.7023 74.5333 50.669 74.5 50.6023 74.5H50.3023C50.169 74.5 50.069 74.5333 50.0023 74.6C49.5357 75.2667 49.1023 75.9333 48.7023 76.6C48.3023 77.2667 47.8357 77.8667 47.3023 78.4C46.769 78.9333 46.1023 79.3333 45.3023 79.6C44.5023 79.9333 43.469 80.1 42.2023 80.1C40.8023 80.1 39.5357 79.9 38.4023 79.5C37.3357 79.1667 36.369 78.7 35.5023 78.1C34.7023 77.5 33.969 76.8333 33.3023 76.1C32.7023 75.3667 32.169 74.6 31.7023 73.8C30.6357 72 29.9357 69.9333 29.6023 67.6C29.869 67.1333 30.2357 66.9 30.7023 66.9C31.0357 66.9 31.2023 67 31.2023 67.2C31.469 68.4667 31.869 69.7333 32.4023 71C32.9357 72.2 33.669 73.2667 34.6023 74.2C35.6023 75.1333 36.8023 75.9 38.2023 76.5C39.669 77.1 41.469 77.4 43.6023 77.4C44.669 77.4 45.5357 77.2667 46.2023 77C46.9357 76.6667 47.5357 76.3 48.0023 75.9C48.469 75.4333 48.8023 74.9667 49.0023 74.5C49.2023 73.9667 49.3357 73.5333 49.4023 73.2C49.4023 72.3333 49.069 71.5 48.4023 70.7C47.8023 69.8333 47.5023 69.1 47.5023 68.5C47.5023 68.1667 47.6357 67.9 47.9023 67.7C47.969 67.7 48.0023 67.7 48.0023 67.7C48.069 67.6333 48.169 67.6 48.3023 67.6C48.9023 67.6 49.4357 68.1333 49.9023 69.2C50.3023 70.2 51.0357 71.2333 52.1023 72.3C53.169 73.3 54.369 74.2333 55.7023 75.1C57.1023 75.9 58.569 76.6 60.1023 77.2C61.6357 77.7333 63.0357 78 64.3023 78C65.4357 78 66.5023 77.8 67.5023 77.4C68.5023 77 69.369 76.4667 70.1023 75.8C69.0357 75 68.2357 74.0333 67.7023 72.9C67.2357 71.7667 67.0023 70.6667 67.0023 69.6C67.0023 68.4667 67.3023 67.5 67.9023 66.7C68.5023 65.9 69.4023 65.5 70.6023 65.5C72.069 65.5 73.1357 65.8667 73.8023 66.6C74.469 67.2667 74.8023 68.1667 74.8023 69.3C74.8023 70.2333 74.6023 71.2333 74.2023 72.3C73.8023 73.3667 73.2357 74.3667 72.5023 75.3C73.6357 76.0333 75.0023 76.4 76.6023 76.4C77.7357 76.4 78.9023 76.1667 80.1023 75.7C81.3023 75.1667 82.4023 74.6333 83.4023 74.1C84.6023 73.4333 85.7023 72.7 86.7023 71.9L87.0023 72.8ZM73.5023 69.7C73.5023 68.9667 73.269 68.3667 72.8023 67.9C72.4023 67.3667 71.7357 67.1 70.8023 67.1C70.269 67.1 69.869 67.3333 69.6023 67.8C69.3357 68.2 69.2023 68.7667 69.2023 69.5C69.2023 70.3 69.369 71.1667 69.7023 72.1C70.1023 72.9667 70.669 73.7667 71.4023 74.5C72.8023 72.7667 73.5023 71.1667 73.5023 69.7ZM130.113 73C128.78 74.1333 127.313 75.1 125.713 75.9C123.313 77.1 120.947 78.1 118.613 78.9C116.347 79.7 114.147 80.1 112.013 80.1C110.013 80.1 108.147 79.6667 106.413 78.8C104.747 77.8667 103.313 76.3667 102.113 74.3C102.047 74.1667 101.947 74.1 101.813 74.1C101.547 74.1 101.247 74.4667 100.913 75.2C100.58 75.9333 100.147 76.7667 99.6133 77.7C99.0799 78.6333 98.4133 79.4667 97.6133 80.2C96.8133 80.9333 95.8133 81.3 94.6133 81.3C93.0799 81.3 91.3466 80.2333 89.4133 78.1C87.4799 75.9667 85.5466 73.1667 83.6133 69.7C81.6799 66.1667 79.8133 62.1333 78.0133 57.6C76.1466 53.0667 74.5133 48.4 73.1133 43.6C71.7133 38.8 70.5799 34.0667 69.7133 29.4C68.8466 24.6667 68.4133 20.4 68.4133 16.6C68.4133 12.2667 69.0799 8.73333 70.4133 6C71.6799 3.2 73.8799 1.8 77.0133 1.8C78.5466 1.8 80.1799 2.36666 81.9133 3.49999C83.6466 4.63333 85.3466 6.2 87.0133 8.2C88.6799 10.1333 90.2799 12.4667 91.8133 15.2C93.4133 17.8667 94.7799 20.8 95.9133 24C97.1133 27.1333 98.0466 30.4333 98.7133 33.9C99.4466 37.3667 99.8133 40.8667 99.8133 44.4C99.8133 49.4667 98.9466 54.4333 97.2133 59.3C95.4799 64.1 92.5466 68.4333 88.4133 72.3C89.7466 74.2333 91.0466 75.7667 92.3133 76.9C93.5799 78.0333 94.7466 78.6 95.8133 78.6C96.6133 78.6 97.2799 78.4 97.8133 78C98.3466 77.5333 98.7799 77.0333 99.1133 76.5C99.5133 75.9 99.8133 75.3 100.013 74.7C100.213 74.1 100.347 73.6667 100.413 73.4C100.547 72.4667 100.68 71.6 100.813 70.8C101.013 70 101.38 69.6 101.913 69.6C102.313 69.6667 102.547 69.7667 102.613 69.9C102.747 70.0333 102.88 70.2333 103.013 70.5C103.147 70.9667 103.347 71.6 103.613 72.4C103.947 73.2 104.447 73.9667 105.113 74.7C105.78 75.4333 106.68 76.0667 107.813 76.6C109.013 77.1333 110.547 77.4 112.413 77.4C113.547 77.4 114.847 77.3333 116.313 77.2C117.78 77 119.28 76.7333 120.813 76.4C122.347 76 123.847 75.5 125.313 74.9C126.847 74.2333 128.247 73.4 129.513 72.4L130.113 73ZM98.3133 45.4C98.3133 42.0667 97.9466 38.7667 97.2133 35.5C96.5466 32.1667 95.6466 29.0333 94.5133 26.1C93.3799 23.1667 92.0466 20.4333 90.5133 17.9C88.9799 15.3667 87.3799 13.1667 85.7133 11.3C84.0466 9.43333 82.3799 8 80.7133 7C78.9799 5.93333 77.3466 5.39999 75.8133 5.39999C73.6133 5.39999 72.0466 6.39999 71.1133 8.4C70.1133 10.3333 69.6133 12.9 69.6133 16.1C69.6133 19.9 70.1799 24.3333 71.3133 29.4C72.4466 34.4 73.9133 39.5 75.7133 44.7C77.4466 49.8333 79.4133 54.8 81.6133 59.6C83.7466 64.3333 85.8799 68.3 88.0133 71.5C91.7466 67.7667 94.3799 63.6667 95.9133 59.2C97.5133 54.7333 98.3133 50.1333 98.3133 45.4ZM175.88 73C174.546 74.1333 172.98 75.1333 171.18 76C169.446 76.8667 167.58 77.6 165.58 78.2C163.58 78.8 161.546 79.2667 159.48 79.6C157.48 79.9333 155.546 80.1 153.68 80.1C152.413 80.1 151.213 79.9 150.08 79.5C149.013 79.1667 148.08 78.7333 147.28 78.2C146.346 77.6 145.48 76.9667 144.68 76.3C143.813 77.6333 142.813 78.5667 141.68 79.1C140.613 79.7 139.48 80 138.28 80C137.146 80 136.013 79.7667 134.88 79.3C133.746 78.8333 132.746 78.2 131.88 77.4C131.013 76.6 130.313 75.6667 129.78 74.6C129.246 73.4667 128.98 72.2667 128.98 71C128.98 69.3333 129.513 67.9 130.58 66.7C131.646 65.4333 133.246 64.8 135.38 64.8C137.713 65.0667 139.546 65.7667 140.88 66.9C142.28 67.9667 142.98 69.0333 142.98 70.1C142.98 70.7 142.646 71 141.98 71C141.513 71 141.08 70.8 140.68 70.4C140.346 69.9333 139.913 69.4667 139.38 69C138.913 68.4667 138.246 68 137.38 67.6C136.58 67.1333 135.48 66.9 134.08 66.9C132.813 66.9 131.913 67.1 131.38 67.5C130.913 67.9 130.68 68.4333 130.68 69.1C130.68 69.9 130.98 70.8333 131.58 71.9C132.246 72.9667 133.046 73.9667 133.98 74.9C134.913 75.8333 135.88 76.6333 136.88 77.3C137.946 77.9 138.88 78.2 139.68 78.2C140.746 78.2 141.513 77.9 141.98 77.3C142.446 76.7 142.813 76.0667 143.08 75.4C143.346 74.6667 143.546 74 143.68 73.4C143.88 72.8 144.213 72.5 144.68 72.5C145.213 72.5 145.78 72.7667 146.38 73.3C146.98 73.7667 147.746 74.3333 148.68 75C149.68 75.6 150.913 76.1667 152.38 76.7C153.913 77.1667 155.846 77.4 158.18 77.4C159.313 77.4 160.613 77.3333 162.08 77.2C163.546 77 165.046 76.7333 166.58 76.4C168.113 76 169.613 75.5 171.08 74.9C172.613 74.2333 174.013 73.4 175.28 72.4L175.88 73ZM193.18 41C193.18 41.6 192.614 41.9 191.48 41.9H182.58C182.714 43.2333 182.814 44.5667 182.88 45.9C183.014 47.2333 183.08 48.5667 183.08 49.9C183.08 54.1 182.614 58.1 181.68 61.9C180.814 65.7 179.38 69.1 177.38 72.1C178.314 74.5 179.047 76.4667 179.58 78C180.114 79.4667 180.447 80.2667 180.58 80.4C180.914 81.2 181.08 81.9333 181.08 82.6C181.08 82.8667 181.014 83.0667 180.88 83.2C180.814 83.4 180.514 83.5667 179.98 83.7C179.58 83.7 179.147 83.5333 178.68 83.2C178.28 82.8667 177.914 82.1667 177.58 81.1C177.447 80.6333 177.047 79.5 176.38 77.7C175.78 75.9 175.047 73.7667 174.18 71.3C173.314 68.8333 172.38 66.2 171.38 63.4C170.38 60.6 169.447 57.9667 168.58 55.5C167.647 53.0333 166.88 50.9 166.28 49.1C165.614 47.2333 165.18 46.0667 164.98 45.6C164.78 45.0667 164.58 44.5333 164.38 44C164.18 43.4 163.98 42.7667 163.78 42.1C156.714 42.1667 149.48 42.2667 142.08 42.4C134.68 42.5333 127.447 42.7 120.38 42.9C113.247 43.0333 106.447 43.2 99.9805 43.4C93.5138 43.6 87.6805 43.8 82.4805 44C81.4805 44 80.9805 43.6333 80.9805 42.9C80.9805 42.5667 81.1471 42.2333 81.4805 41.9C81.7471 41.5 82.1471 41.3 82.6805 41.3C88.2805 41.3 94.4471 41.2667 101.18 41.2C107.847 41.0667 114.714 40.9333 121.78 40.8C128.78 40.6667 135.814 40.5333 142.88 40.4C149.947 40.2667 156.68 40.1333 163.08 40C162.547 38.3333 162.014 36.6 161.48 34.8C160.947 32.9333 160.48 31.1333 160.08 29.4C159.614 27.6667 159.247 26 158.98 24.4C158.714 22.8 158.58 21.4 158.58 20.2C158.58 19.4667 158.68 18.5333 158.88 17.4C159.08 16.2667 159.414 15.2 159.88 14.2C160.28 13.1333 160.847 12.2333 161.58 11.5C162.314 10.7667 163.18 10.4 164.18 10.4C166.247 10.4 168.247 11.2 170.18 12.8C172.047 14.4 173.78 16.5667 175.38 19.3C176.98 21.9667 178.38 25.1 179.58 28.7C180.78 32.2333 181.68 35.9333 182.28 39.8C183.48 39.7333 184.614 39.7 185.68 39.7C186.747 39.7 187.78 39.7 188.78 39.7C189.114 39.7 189.514 39.6333 189.98 39.5C190.514 39.3 191.047 39.2 191.58 39.2C192.114 39.2 192.514 39.3667 192.78 39.7C193.047 40.0333 193.18 40.4667 193.18 41ZM180.58 39.8C179.98 36.3333 179.147 33.0333 178.08 29.9C177.08 26.7 175.88 23.9 174.48 21.5C173.014 19.1 171.414 17.2 169.68 15.8C167.88 14.3333 165.98 13.6 163.98 13.6C161.247 13.6 159.88 15.0667 159.88 18C159.88 19.2667 160.014 20.5667 160.28 21.9C160.48 23.2333 160.814 24.7667 161.28 26.5C161.747 28.1667 162.347 30.1 163.08 32.3C163.814 34.4333 164.714 37 165.78 40C168.514 40 171.114 39.9667 173.58 39.9C176.047 39.8333 178.38 39.8 180.58 39.8ZM181.48 50.5C181.48 47.6333 181.28 44.7667 180.88 41.9C178.547 41.9 176.214 41.9 173.88 41.9C171.547 41.9 169.114 41.9333 166.58 42C167.38 44.2667 168.247 46.6667 169.18 49.2C170.047 51.7333 170.947 54.2667 171.88 56.8C172.747 59.3333 173.614 61.8 174.48 64.2C175.347 66.6 176.147 68.8 176.88 70.8C178.48 68.1333 179.647 65.0667 180.38 61.6C181.114 58.0667 181.48 54.3667 181.48 50.5ZM293.613 66.1C293.613 69.9667 292.646 73.0667 290.713 75.4C288.846 77.6667 286.379 79.4 283.313 80.6C280.246 81.8667 276.779 82.6667 272.913 83C269.046 83.4 265.146 83.6 261.213 83.6C258.213 83.6 255.313 83.5333 252.513 83.4C249.713 83.3333 247.146 83.3 244.813 83.3C242.679 83.3 240.013 83.3 236.813 83.3C233.613 83.3667 230.246 83.5 226.713 83.7C223.246 83.9667 219.746 84.3 216.213 84.7C212.746 85.1667 209.612 85.7667 206.812 86.5C204.012 87.3 201.746 88.2667 200.012 89.4C198.279 90.6 197.412 92.0333 197.412 93.7C197.412 94.2333 197.179 94.5 196.712 94.5C196.446 94.5 196.179 94.3667 195.912 94.1C195.646 93.8333 195.512 93.5 195.512 93.1C195.512 91.0333 196.346 89.2667 198.012 87.8C199.679 86.3333 201.846 85.1 204.512 84.1C207.112 83.1667 210.079 82.4333 213.412 81.9C216.746 81.3667 220.079 80.9667 223.413 80.7C226.813 80.5 230.046 80.3667 233.113 80.3C236.179 80.2333 238.746 80.2 240.812 80.2C243.346 80.2 245.479 80.2 247.213 80.2C248.946 80.2667 250.513 80.3 251.913 80.3C253.313 80.3667 254.646 80.4 255.913 80.4C257.179 80.4667 258.613 80.5 260.213 80.5C264.546 80.5 268.646 80.3333 272.513 80C276.446 79.6667 279.879 78.9667 282.813 77.9C285.746 76.8333 288.079 75.3 289.813 73.3C291.613 71.3 292.513 68.6667 292.513 65.4C292.513 63.6 291.979 61.3333 290.913 58.6C289.913 55.8667 288.513 52.8667 286.713 49.6C284.979 46.3333 282.946 42.9333 280.613 39.4C278.346 35.8667 275.946 32.3667 273.413 28.9C270.879 25.4333 268.313 22.1667 265.713 19.1C263.113 15.9667 260.613 13.2333 258.213 10.9C255.879 8.5 253.713 6.6 251.713 5.2C249.779 3.79999 248.213 3.09999 247.013 3.09999C245.079 3.09999 243.779 3.76666 243.113 5.1C242.512 6.43333 242.212 8 242.212 9.8C242.212 14.3333 243.179 18.8667 245.113 23.4C247.046 27.8667 249.646 32.1 252.913 36.1C256.246 40.0333 260.146 43.6 264.613 46.8C269.079 49.9333 273.846 52.4667 278.913 54.4C280.646 55.0667 281.513 55.7 281.513 56.3C281.513 56.9667 280.446 57.3 278.312 57.3C273.779 56.0333 269.279 53.9 264.813 50.9C260.346 47.9 256.346 44.3333 252.813 40.2C249.279 36 246.413 31.4333 244.213 26.5C242.013 21.5 240.913 16.3667 240.913 11.1C240.913 7.7 241.446 4.9 242.513 2.7C243.579 0.499995 245.079 -0.600006 247.013 -0.600006C248.279 -0.600006 249.913 0.0999946 251.913 1.5C253.913 2.83333 256.113 4.66666 258.513 7C260.913 9.33333 263.446 12.0667 266.113 15.2C268.846 18.3333 271.513 21.6667 274.113 25.2C276.713 28.7333 279.179 32.4 281.513 36.2C283.846 39.9333 285.913 43.6 287.713 47.2C289.513 50.8 290.946 54.2333 292.013 57.5C293.079 60.7 293.613 63.5667 293.613 66.1ZM367.711 73C366.378 74.1333 364.911 75.1 363.311 75.9C360.911 77.1 358.544 78.1 356.211 78.9C353.944 79.7 351.744 80.1 349.611 80.1C347.611 80.1 345.744 79.6667 344.011 78.8C342.344 77.8667 340.911 76.3667 339.711 74.3C339.644 74.1667 339.544 74.1 339.411 74.1C339.144 74.1 338.844 74.4667 338.511 75.2C338.178 75.9333 337.744 76.7667 337.211 77.7C336.678 78.6333 336.011 79.4667 335.211 80.2C334.411 80.9333 333.411 81.3 332.211 81.3C330.678 81.3 328.944 80.2333 327.011 78.1C325.078 75.9667 323.144 73.1667 321.211 69.7C319.278 66.1667 317.411 62.1333 315.611 57.6C313.744 53.0667 312.111 48.4 310.711 43.6C309.311 38.8 308.178 34.0667 307.311 29.4C306.444 24.6667 306.011 20.4 306.011 16.6C306.011 12.2667 306.678 8.73333 308.011 6C309.278 3.2 311.478 1.8 314.611 1.8C316.144 1.8 317.778 2.36666 319.511 3.49999C321.244 4.63333 322.944 6.2 324.611 8.2C326.278 10.1333 327.878 12.4667 329.411 15.2C331.011 17.8667 332.378 20.8 333.511 24C334.711 27.1333 335.644 30.4333 336.311 33.9C337.044 37.3667 337.411 40.8667 337.411 44.4C337.411 49.4667 336.544 54.4333 334.811 59.3C333.078 64.1 330.144 68.4333 326.011 72.3C327.344 74.2333 328.644 75.7667 329.911 76.9C331.178 78.0333 332.344 78.6 333.411 78.6C334.211 78.6 334.878 78.4 335.411 78C335.944 77.5333 336.378 77.0333 336.711 76.5C337.111 75.9 337.411 75.3 337.611 74.7C337.811 74.1 337.944 73.6667 338.011 73.4C338.144 72.4667 338.278 71.6 338.411 70.8C338.611 70 338.978 69.6 339.511 69.6C339.911 69.6667 340.144 69.7667 340.211 69.9C340.344 70.0333 340.478 70.2333 340.611 70.5C340.744 70.9667 340.944 71.6 341.211 72.4C341.544 73.2 342.044 73.9667 342.711 74.7C343.378 75.4333 344.278 76.0667 345.411 76.6C346.611 77.1333 348.144 77.4 350.011 77.4C351.144 77.4 352.444 77.3333 353.911 77.2C355.378 77 356.878 76.7333 358.411 76.4C359.944 76 361.444 75.5 362.911 74.9C364.444 74.2333 365.844 73.4 367.111 72.4L367.711 73ZM335.911 45.4C335.911 42.0667 335.544 38.7667 334.811 35.5C334.144 32.1667 333.244 29.0333 332.111 26.1C330.978 23.1667 329.644 20.4333 328.111 17.9C326.578 15.3667 324.978 13.1667 323.311 11.3C321.644 9.43333 319.978 8 318.311 7C316.578 5.93333 314.944 5.39999 313.411 5.39999C311.211 5.39999 309.644 6.39999 308.711 8.4C307.711 10.3333 307.211 12.9 307.211 16.1C307.211 19.9 307.778 24.3333 308.911 29.4C310.044 34.4 311.511 39.5 313.311 44.7C315.044 49.8333 317.011 54.8 319.211 59.6C321.344 64.3333 323.478 68.3 325.611 71.5C329.344 67.7667 331.978 63.6667 333.511 59.2C335.111 54.7333 335.911 50.1333 335.911 45.4ZM413.477 73C412.144 74.1333 410.577 75.1333 408.777 76C407.044 76.8667 405.177 77.6 403.177 78.2C401.177 78.8 399.144 79.2667 397.077 79.6C395.077 79.9333 393.144 80.1 391.277 80.1C390.011 80.1 388.811 79.9 387.677 79.5C386.611 79.1667 385.677 78.7333 384.877 78.2C383.944 77.6 383.077 76.9667 382.277 76.3C381.411 77.6333 380.411 78.5667 379.277 79.1C378.211 79.7 377.077 80 375.877 80C374.744 80 373.611 79.7667 372.477 79.3C371.344 78.8333 370.344 78.2 369.477 77.4C368.611 76.6 367.911 75.6667 367.377 74.6C366.844 73.4667 366.577 72.2667 366.577 71C366.577 69.3333 367.111 67.9 368.177 66.7C369.244 65.4333 370.844 64.8 372.977 64.8C375.311 65.0667 377.144 65.7667 378.477 66.9C379.877 67.9667 380.577 69.0333 380.577 70.1C380.577 70.7 380.244 71 379.577 71C379.111 71 378.677 70.8 378.277 70.4C377.944 69.9333 377.511 69.4667 376.977 69C376.511 68.4667 375.844 68 374.977 67.6C374.177 67.1333 373.077 66.9 371.677 66.9C370.411 66.9 369.511 67.1 368.977 67.5C368.511 67.9 368.277 68.4333 368.277 69.1C368.277 69.9 368.577 70.8333 369.177 71.9C369.844 72.9667 370.644 73.9667 371.577 74.9C372.511 75.8333 373.477 76.6333 374.477 77.3C375.544 77.9 376.477 78.2 377.277 78.2C378.344 78.2 379.111 77.9 379.577 77.3C380.044 76.7 380.411 76.0667 380.677 75.4C380.944 74.6667 381.144 74 381.277 73.4C381.477 72.8 381.811 72.5 382.277 72.5C382.811 72.5 383.377 72.7667 383.977 73.3C384.577 73.7667 385.344 74.3333 386.277 75C387.277 75.6 388.511 76.1667 389.977 76.7C391.511 77.1667 393.444 77.4 395.777 77.4C396.911 77.4 398.211 77.3333 399.677 77.2C401.144 77 402.644 76.7333 404.177 76.4C405.711 76 407.211 75.5 408.677 74.9C410.211 74.2333 411.611 73.4 412.877 72.4L413.477 73ZM440.678 67.2C440.678 67.4 440.211 67.6667 439.278 68C438.345 68.2667 437.145 68.5333 435.678 68.8C434.278 69.0667 432.711 69.3 430.978 69.5C429.245 69.7 427.578 69.8 425.978 69.8C423.845 69.8 422.011 69.5667 420.478 69.1C418.945 68.6333 418.178 67.8333 418.178 66.7C418.178 65.3667 418.778 64.7 419.978 64.7C420.378 64.7 420.745 64.8333 421.078 65.1C421.478 65.3667 421.978 65.6667 422.578 66C423.245 66.2667 424.145 66.5333 425.278 66.8C426.478 67.0667 428.078 67.2 430.078 67.2C432.078 67.2 433.578 67.1667 434.578 67.1C435.645 67.0333 436.445 66.9667 436.978 66.9C437.578 66.7667 438.011 66.6667 438.278 66.6C438.611 66.5333 439.045 66.5 439.578 66.5C440.311 66.5 440.678 66.7333 440.678 67.2ZM426.978 72.5C426.978 73.3 426.878 74.1667 426.678 75.1C426.478 76.0333 426.145 76.9 425.678 77.7C425.211 78.5 424.645 79.1667 423.978 79.7C423.311 80.3 422.478 80.6 421.478 80.6C419.011 80.6 417.011 80 415.478 78.8C413.945 77.6 412.745 76.2667 411.878 74.8C411.011 73.2667 410.445 71.8333 410.178 70.5C409.911 69.1667 409.778 68.3667 409.778 68.1C409.778 67.5 410.011 67.2 410.478 67.2C410.745 67.2 410.978 67.3 411.178 67.5C411.311 67.7 411.445 67.9333 411.578 68.2C411.778 68.4667 411.911 68.8333 411.978 69.3C412.178 69.7667 412.545 70.4667 413.078 71.4C413.545 72.2667 414.178 73.1667 414.978 74.1C415.778 74.9667 416.678 75.7333 417.678 76.4C418.745 77 419.878 77.3 421.078 77.3C422.211 77.3 423.078 77 423.678 76.4C424.345 75.7333 424.845 75 425.178 74.2C425.511 73.2667 425.711 72.2333 425.778 71.1C425.778 70.7667 425.878 70.6 426.078 70.6C426.345 70.6 426.511 70.6333 426.578 70.7L426.778 70.9C426.911 71.4333 426.978 71.9667 426.978 72.5ZM478.108 73C476.774 74.1333 475.208 75.1333 473.408 76C471.674 76.8667 469.808 77.6 467.808 78.2C465.808 78.8 463.774 79.2667 461.708 79.6C459.708 79.9333 457.774 80.1 455.908 80.1C455.108 80.1 454.208 80.0667 453.208 80C452.274 79.9333 451.374 79.7667 450.508 79.5C449.641 79.3 448.908 78.9667 448.308 78.5C447.774 78.0333 447.508 77.3667 447.508 76.5C447.508 75.7 447.674 75.1 448.008 74.7C448.408 74.2333 448.841 73.9 449.308 73.7C449.774 73.4333 450.174 73.2333 450.508 73.1C450.908 72.9 451.108 72.6667 451.108 72.4C451.108 72.0667 450.941 71.9 450.608 71.9C450.274 71.8333 449.941 71.8 449.608 71.8C447.808 71.8 446.208 71.7667 444.808 71.7C443.474 71.5667 442.374 71.3333 441.508 71C440.641 70.6667 440.008 70.1333 439.608 69.4C439.141 68.6667 438.908 67.7 438.908 66.5C438.908 65.2333 439.374 64.2333 440.308 63.5C441.174 62.7 442.241 62.3 443.508 62.3C444.841 62.3 446.008 62.6 447.008 63.2C448.074 63.8 448.608 64.4667 448.608 65.2C448.608 65.4667 448.508 65.6667 448.308 65.8C448.108 65.9333 447.908 66 447.708 66C447.308 66 446.841 65.8 446.308 65.4C445.508 65 444.808 64.7333 444.208 64.6C443.674 64.4667 443.208 64.4 442.808 64.4C442.008 64.4 441.408 64.5333 441.008 64.8C440.541 65 440.208 65.5667 440.008 66.5C440.008 66.9667 440.174 67.3667 440.508 67.7C440.841 68.0333 441.241 68.3 441.708 68.5C442.174 68.7 442.608 68.8667 443.008 69C443.474 69.0667 443.841 69.1 444.108 69.1C444.641 69.1667 445.474 69.2 446.608 69.2C447.741 69.2 448.874 69.2667 450.008 69.4C450.741 69.4667 451.341 69.7333 451.808 70.2C452.341 70.6 452.608 71.0667 452.608 71.6C452.608 72 452.408 72.3667 452.008 72.7C451.674 73.0333 451.274 73.3333 450.808 73.6C450.408 73.8 450.008 74.0333 449.608 74.3C449.274 74.5 449.108 74.7667 449.108 75.1C449.108 75.6333 449.508 76.0667 450.308 76.4C451.174 76.6667 452.174 76.9 453.308 77.1C454.508 77.2333 455.741 77.3333 457.008 77.4C458.341 77.4 459.474 77.4 460.408 77.4C461.541 77.4 462.841 77.3333 464.308 77.2C465.774 77 467.274 76.7333 468.808 76.4C470.341 76 471.841 75.5 473.308 74.9C474.841 74.2333 476.241 73.4 477.508 72.4L478.108 73ZM532.22 73C531.154 73.9333 529.954 74.7667 528.62 75.5C527.287 76.1667 525.854 76.8 524.32 77.4C523.987 77.5333 523.354 77.7333 522.42 78C521.554 78.2667 520.487 78.5667 519.22 78.9C517.954 79.1667 516.554 79.4 515.02 79.6C513.554 79.8 512.054 79.9 510.52 79.9C509.054 79.9 507.62 79.7667 506.22 79.5C504.82 79.2333 503.554 78.8 502.42 78.2C501.354 77.5333 500.487 76.6333 499.82 75.5C499.22 74.3667 498.92 72.9667 498.92 71.3C498.92 69.7667 499.454 68.4 500.52 67.2C501.654 66 503.187 65.4 505.12 65.4C505.787 65.4 506.454 65.5 507.12 65.7C507.854 65.9 508.52 66.1667 509.12 66.5C509.72 66.8333 510.187 67.2 510.52 67.6C510.92 68 511.12 68.4 511.12 68.8C511.12 69.0667 510.987 69.3333 510.72 69.6C510.52 69.8667 510.287 70 510.02 70C509.754 70 509.42 69.8667 509.02 69.6C508.687 69.2667 508.287 68.9333 507.82 68.6C507.354 68.2667 506.754 67.9667 506.02 67.7C505.354 67.3667 504.52 67.2 503.52 67.2C502.72 67.2 501.987 67.4 501.32 67.8C500.72 68.1333 500.42 68.6 500.42 69.2C500.42 70.8 500.787 72.1333 501.52 73.2C502.254 74.2667 503.22 75.1333 504.42 75.8C505.62 76.4 506.987 76.8333 508.52 77.1C510.054 77.3667 511.62 77.5 513.22 77.5C515.154 77.5 517.054 77.3667 518.92 77.1C520.854 76.7667 522.52 76.4 523.92 76C525.254 75.6667 526.587 75.2 527.92 74.6C529.254 74 530.487 73.2667 531.62 72.4L532.22 73ZM565.228 73C564.161 73.9333 562.961 74.7667 561.628 75.5C560.295 76.2333 558.861 76.8667 557.328 77.4C556.328 77.8 554.995 78.2 553.328 78.6C551.661 78.9333 549.961 79.1 548.228 79.1C547.028 79.1 545.861 79 544.728 78.8C543.595 78.5333 542.595 78.1 541.728 77.5C540.861 76.9 540.161 76.1 539.628 75.1C539.095 74.0333 538.828 72.7333 538.828 71.2C538.828 70.5333 538.861 70.0333 538.928 69.7C538.928 69.4333 538.395 69.3 537.328 69.3H534.428C533.895 69.3 533.461 69.3 533.128 69.3C532.861 69.2333 532.528 69.1 532.128 68.9C532.928 69.9 533.328 70.6333 533.328 71.1C533.328 71.7667 532.961 72.4 532.228 73C531.561 73.5333 530.661 74.1667 529.528 74.9L528.728 74.2C530.728 73.1333 531.728 72.1 531.728 71.1C531.728 70.1 530.928 69.1333 529.328 68.2C528.328 67.6 527.528 67.0667 526.928 66.6C526.261 66.0667 525.928 65.5333 525.928 65C525.928 64.8667 525.995 64.6333 526.128 64.3C526.195 63.9667 526.395 63.8 526.728 63.8C527.195 63.8 527.628 63.9667 528.028 64.3C528.361 64.5667 528.861 64.9 529.528 65.3C530.128 65.7 530.995 66.0667 532.128 66.4C533.261 66.6667 534.761 66.8 536.628 66.8C537.228 66.8 537.728 66.7667 538.128 66.7C538.528 66.5667 538.961 66.5 539.428 66.5C540.561 66.5 541.128 66.8667 541.128 67.6C541.128 68.0667 541.028 68.4 540.828 68.6C540.628 68.8 540.528 69.3333 540.528 70.2C540.528 71.4 540.861 72.4333 541.528 73.3C542.261 74.1 543.161 74.7667 544.228 75.3C545.361 75.7667 546.595 76.1333 547.928 76.4C549.261 76.6 550.595 76.7 551.928 76.7C553.861 76.7 555.528 76.5 556.928 76.1C558.261 75.7 559.595 75.2 560.928 74.6C562.261 74 563.495 73.2667 564.628 72.4L565.228 73ZM601.936 73C600.603 74.1333 599.036 75.1333 597.236 76C595.503 76.8667 593.636 77.6 591.636 78.2C589.636 78.8 587.603 79.2667 585.536 79.6C583.536 79.9333 581.603 80.1 579.736 80.1C578.936 80.1 578.036 80.0667 577.036 80C576.103 79.9333 575.203 79.7667 574.336 79.5C573.469 79.3 572.736 78.9667 572.136 78.5C571.603 78.0333 571.336 77.3667 571.336 76.5C571.336 75.7 571.503 75.1 571.836 74.7C572.236 74.2333 572.669 73.9 573.136 73.7C573.603 73.4333 574.003 73.2333 574.336 73.1C574.736 72.9 574.936 72.6667 574.936 72.4C574.936 72.0667 574.769 71.9 574.436 71.9C574.103 71.8333 573.769 71.8 573.436 71.8C571.636 71.8 570.036 71.7667 568.636 71.7C567.303 71.5667 566.203 71.3333 565.336 71C564.469 70.6667 563.836 70.1333 563.436 69.4C562.969 68.6667 562.736 67.7 562.736 66.5C562.736 65.2333 563.203 64.2333 564.136 63.5C565.003 62.7 566.069 62.3 567.336 62.3C568.669 62.3 569.836 62.6 570.836 63.2C571.903 63.8 572.436 64.4667 572.436 65.2C572.436 65.4667 572.336 65.6667 572.136 65.8C571.936 65.9333 571.736 66 571.536 66C571.136 66 570.669 65.8 570.136 65.4C569.336 65 568.636 64.7333 568.036 64.6C567.503 64.4667 567.036 64.4 566.636 64.4C565.836 64.4 565.236 64.5333 564.836 64.8C564.369 65 564.036 65.5667 563.836 66.5C563.836 66.9667 564.003 67.3667 564.336 67.7C564.669 68.0333 565.069 68.3 565.536 68.5C566.003 68.7 566.436 68.8667 566.836 69C567.303 69.0667 567.669 69.1 567.936 69.1C568.469 69.1667 569.303 69.2 570.436 69.2C571.569 69.2 572.703 69.2667 573.836 69.4C574.569 69.4667 575.169 69.7333 575.636 70.2C576.169 70.6 576.436 71.0667 576.436 71.6C576.436 72 576.236 72.3667 575.836 72.7C575.503 73.0333 575.103 73.3333 574.636 73.6C574.236 73.8 573.836 74.0333 573.436 74.3C573.103 74.5 572.936 74.7667 572.936 75.1C572.936 75.6333 573.336 76.0667 574.136 76.4C575.003 76.6667 576.003 76.9 577.136 77.1C578.336 77.2333 579.569 77.3333 580.836 77.4C582.169 77.4 583.303 77.4 584.236 77.4C585.369 77.4 586.669 77.3333 588.136 77.2C589.603 77 591.103 76.7333 592.636 76.4C594.169 76 595.669 75.5 597.136 74.9C598.669 74.2333 600.069 73.4 601.336 72.4L601.936 73ZM647.755 73C646.421 74.1333 644.855 75.1333 643.055 76C641.321 76.8667 639.455 77.6 637.455 78.2C635.455 78.8 633.421 79.2667 631.355 79.6C629.355 79.9333 627.421 80.1 625.555 80.1C624.288 80.1 623.088 79.9 621.955 79.5C620.888 79.1667 619.955 78.7333 619.155 78.2C618.221 77.6 617.355 76.9667 616.555 76.3C615.688 77.6333 614.688 78.5667 613.555 79.1C612.488 79.7 611.355 80 610.155 80C609.021 80 607.888 79.7667 606.755 79.3C605.621 78.8333 604.621 78.2 603.755 77.4C602.888 76.6 602.188 75.6667 601.655 74.6C601.121 73.4667 600.855 72.2667 600.855 71C600.855 69.3333 601.388 67.9 602.455 66.7C603.521 65.4333 605.121 64.8 607.255 64.8C609.588 65.0667 611.421 65.7667 612.755 66.9C614.155 67.9667 614.855 69.0333 614.855 70.1C614.855 70.7 614.521 71 613.855 71C613.388 71 612.955 70.8 612.555 70.4C612.221 69.9333 611.788 69.4667 611.255 69C610.788 68.4667 610.121 68 609.255 67.6C608.455 67.1333 607.355 66.9 605.955 66.9C604.688 66.9 603.788 67.1 603.255 67.5C602.788 67.9 602.555 68.4333 602.555 69.1C602.555 69.9 602.855 70.8333 603.455 71.9C604.121 72.9667 604.921 73.9667 605.855 74.9C606.788 75.8333 607.755 76.6333 608.755 77.3C609.821 77.9 610.755 78.2 611.555 78.2C612.621 78.2 613.388 77.9 613.855 77.3C614.321 76.7 614.688 76.0667 614.955 75.4C615.221 74.6667 615.421 74 615.555 73.4C615.755 72.8 616.088 72.5 616.555 72.5C617.088 72.5 617.655 72.7667 618.255 73.3C618.855 73.7667 619.621 74.3333 620.555 75C621.555 75.6 622.788 76.1667 624.255 76.7C625.788 77.1667 627.721 77.4 630.055 77.4C631.188 77.4 632.488 77.3333 633.955 77.2C635.421 77 636.921 76.7333 638.455 76.4C639.988 76 641.488 75.5 642.955 74.9C644.488 74.2333 645.888 73.4 647.155 72.4L647.755 73ZM665.055 41C665.055 41.6 664.489 41.9 663.355 41.9H654.455C654.589 43.2333 654.689 44.5667 654.755 45.9C654.889 47.2333 654.955 48.5667 654.955 49.9C654.955 54.1 654.489 58.1 653.555 61.9C652.689 65.7 651.255 69.1 649.255 72.1C650.189 74.5 650.922 76.4667 651.455 78C651.989 79.4667 652.322 80.2667 652.455 80.4C652.789 81.2 652.955 81.9333 652.955 82.6C652.955 82.8667 652.889 83.0667 652.755 83.2C652.689 83.4 652.389 83.5667 651.855 83.7C651.455 83.7 651.022 83.5333 650.555 83.2C650.155 82.8667 649.789 82.1667 649.455 81.1C649.322 80.6333 648.922 79.5 648.255 77.7C647.655 75.9 646.922 73.7667 646.055 71.3C645.189 68.8333 644.255 66.2 643.255 63.4C642.255 60.6 641.322 57.9667 640.455 55.5C639.522 53.0333 638.755 50.9 638.155 49.1C637.489 47.2333 637.055 46.0667 636.855 45.6C636.655 45.0667 636.455 44.5333 636.255 44C636.055 43.4 635.855 42.7667 635.655 42.1C628.589 42.1667 621.355 42.2667 613.955 42.4C606.555 42.5333 599.322 42.7 592.255 42.9C585.122 43.0333 578.322 43.2 571.855 43.4C565.389 43.6 559.555 43.8 554.355 44C553.355 44 552.855 43.6333 552.855 42.9C552.855 42.5667 553.022 42.2333 553.355 41.9C553.622 41.5 554.022 41.3 554.555 41.3C560.155 41.3 566.322 41.2667 573.055 41.2C579.722 41.0667 586.589 40.9333 593.655 40.8C600.655 40.6667 607.689 40.5333 614.755 40.4C621.822 40.2667 628.555 40.1333 634.955 40C634.422 38.3333 633.889 36.6 633.355 34.8C632.822 32.9333 632.355 31.1333 631.955 29.4C631.489 27.6667 631.122 26 630.855 24.4C630.589 22.8 630.455 21.4 630.455 20.2C630.455 19.4667 630.555 18.5333 630.755 17.4C630.955 16.2667 631.289 15.2 631.755 14.2C632.155 13.1333 632.722 12.2333 633.455 11.5C634.189 10.7667 635.055 10.4 636.055 10.4C638.122 10.4 640.122 11.2 642.055 12.8C643.922 14.4 645.655 16.5667 647.255 19.3C648.855 21.9667 650.255 25.1 651.455 28.7C652.655 32.2333 653.555 35.9333 654.155 39.8C655.355 39.7333 656.489 39.7 657.555 39.7C658.622 39.7 659.655 39.7 660.655 39.7C660.989 39.7 661.389 39.6333 661.855 39.5C662.389 39.3 662.922 39.2 663.455 39.2C663.989 39.2 664.389 39.3667 664.655 39.7C664.922 40.0333 665.055 40.4667 665.055 41ZM652.455 39.8C651.855 36.3333 651.022 33.0333 649.955 29.9C648.955 26.7 647.755 23.9 646.355 21.5C644.889 19.1 643.289 17.2 641.555 15.8C639.755 14.3333 637.855 13.6 635.855 13.6C633.122 13.6 631.755 15.0667 631.755 18C631.755 19.2667 631.889 20.5667 632.155 21.9C632.355 23.2333 632.689 24.7667 633.155 26.5C633.622 28.1667 634.222 30.1 634.955 32.3C635.689 34.4333 636.589 37 637.655 40C640.389 40 642.989 39.9667 645.455 39.9C647.922 39.8333 650.255 39.8 652.455 39.8ZM653.355 50.5C653.355 47.6333 653.155 44.7667 652.755 41.9C650.422 41.9 648.089 41.9 645.755 41.9C643.422 41.9 640.989 41.9333 638.455 42C639.255 44.2667 640.122 46.6667 641.055 49.2C641.922 51.7333 642.822 54.2667 643.755 56.8C644.622 59.3333 645.489 61.8 646.355 64.2C647.222 66.6 648.022 68.8 648.755 70.8C650.355 68.1333 651.522 65.0667 652.255 61.6C652.989 58.0667 653.355 54.3667 653.355 50.5ZM703.694 73C702.36 74.1333 700.794 75.1333 698.994 76C697.26 76.8667 695.394 77.6 693.394 78.2C691.394 78.8 689.36 79.2667 687.294 79.6C685.294 79.9333 683.36 80.1 681.494 80.1C680.694 80.1 679.794 80.0667 678.794 80C677.86 79.9333 676.96 79.7667 676.094 79.5C675.227 79.3 674.494 78.9667 673.894 78.5C673.36 78.0333 673.094 77.3667 673.094 76.5C673.094 75.7 673.26 75.1 673.594 74.7C673.994 74.2333 674.427 73.9 674.894 73.7C675.36 73.4333 675.76 73.2333 676.094 73.1C676.494 72.9 676.694 72.6667 676.694 72.4C676.694 72.0667 676.527 71.9 676.194 71.9C675.86 71.8333 675.527 71.8 675.194 71.8C673.394 71.8 671.794 71.7667 670.394 71.7C669.06 71.5667 667.96 71.3333 667.094 71C666.227 70.6667 665.594 70.1333 665.194 69.4C664.727 68.6667 664.494 67.7 664.494 66.5C664.494 65.2333 664.96 64.2333 665.894 63.5C666.76 62.7 667.827 62.3 669.094 62.3C670.427 62.3 671.594 62.6 672.594 63.2C673.66 63.8 674.194 64.4667 674.194 65.2C674.194 65.4667 674.094 65.6667 673.894 65.8C673.694 65.9333 673.494 66 673.294 66C672.894 66 672.427 65.8 671.894 65.4C671.094 65 670.394 64.7333 669.794 64.6C669.26 64.4667 668.794 64.4 668.394 64.4C667.594 64.4 666.994 64.5333 666.594 64.8C666.127 65 665.794 65.5667 665.594 66.5C665.594 66.9667 665.76 67.3667 666.094 67.7C666.427 68.0333 666.827 68.3 667.294 68.5C667.76 68.7 668.194 68.8667 668.594 69C669.06 69.0667 669.427 69.1 669.694 69.1C670.227 69.1667 671.06 69.2 672.194 69.2C673.327 69.2 674.46 69.2667 675.594 69.4C676.327 69.4667 676.927 69.7333 677.394 70.2C677.927 70.6 678.194 71.0667 678.194 71.6C678.194 72 677.994 72.3667 677.594 72.7C677.26 73.0333 676.86 73.3333 676.394 73.6C675.994 73.8 675.594 74.0333 675.194 74.3C674.86 74.5 674.694 74.7667 674.694 75.1C674.694 75.6333 675.094 76.0667 675.894 76.4C676.76 76.6667 677.76 76.9 678.894 77.1C680.094 77.2333 681.327 77.3333 682.594 77.4C683.927 77.4 685.06 77.4 685.994 77.4C687.127 77.4 688.427 77.3333 689.894 77.2C691.36 77 692.86 76.7333 694.394 76.4C695.927 76 697.427 75.5 698.894 74.9C700.427 74.2333 701.827 73.4 703.094 72.4L703.694 73ZM735.613 53.5C735.613 56.5667 735.346 59.5 734.813 62.3C734.346 65.0333 733.579 67.5333 732.513 69.8C731.446 72.0667 730.079 74.0333 728.413 75.7C726.813 77.3667 724.846 78.6 722.513 79.4C722.779 80.5333 722.979 81.6333 723.113 82.7C723.313 83.7667 723.413 84.7667 723.413 85.7C723.413 86.6333 723.079 87.1 722.413 87.1C721.746 87.1 721.279 86.5333 721.013 85.4C720.813 84.5333 720.613 83.6667 720.413 82.8C720.213 81.9333 719.979 81.0667 719.713 80.2C719.046 80.3333 718.379 80.4333 717.713 80.5C717.046 80.5667 716.346 80.6 715.613 80.6C713.279 80.6 711.279 80.3333 709.613 79.8C707.946 79.2667 706.579 78.6 705.513 77.8C704.513 76.9333 703.779 75.9667 703.312 74.9C702.779 73.8333 702.512 72.8 702.512 71.8C702.512 70.2667 703.012 68.9333 704.013 67.8C705.013 66.6 706.379 66 708.113 66C709.113 66 710.013 66.1667 710.813 66.5C711.613 66.8333 712.279 67.2333 712.813 67.7C713.346 68.1667 713.746 68.6333 714.013 69.1C714.346 69.5667 714.513 69.9667 714.513 70.3C714.513 70.6333 714.346 70.8333 714.013 70.9C713.813 70.8333 713.579 70.6667 713.313 70.4C713.113 70.1333 712.779 69.8667 712.313 69.6C711.846 69.2667 711.213 69 710.413 68.8C709.613 68.5333 708.579 68.4 707.313 68.4C706.046 68.4 705.113 68.6333 704.513 69.1C703.913 69.5 703.613 70.0667 703.613 70.8C703.613 71.5333 703.946 72.3667 704.613 73.3C705.279 74.1667 706.179 75 707.313 75.8C708.513 76.6 709.913 77.2667 711.513 77.8C713.179 78.3333 715.013 78.6 717.013 78.6C717.346 78.6 717.713 78.6 718.113 78.6C718.513 78.6 718.879 78.5667 719.213 78.5C717.346 72.3 714.979 66.2333 712.113 60.3C709.246 54.3 706.479 48.5667 703.813 43.1C701.146 37.5667 698.846 32.3333 696.912 27.4C694.979 22.4 694.012 17.7667 694.012 13.5C694.012 11.5667 694.279 9.83333 694.812 8.3C695.346 6.76666 696.046 5.46666 696.912 4.39999C697.712 3.26666 698.612 2.4 699.612 1.8C700.612 1.2 701.579 0.899998 702.512 0.899998C705.713 0.899998 708.713 1.66666 711.513 3.2C714.379 4.73333 717.046 6.8 719.513 9.4C721.979 12 724.179 15.0667 726.113 18.6C728.113 22.0667 729.813 25.7333 731.213 29.6C732.613 33.4667 733.679 37.4667 734.413 41.6C735.213 45.6667 735.613 49.6333 735.613 53.5ZM733.613 54.9C733.613 51.1667 733.246 47.3 732.513 43.3C731.779 39.3 730.713 35.4 729.313 31.6C727.913 27.7333 726.246 24.0667 724.313 20.6C722.379 17.1333 720.213 14.1 717.813 11.5C715.413 8.9 712.813 6.83333 710.013 5.3C707.213 3.76666 704.246 2.99999 701.112 2.99999C699.579 2.99999 698.279 3.66666 697.212 5C696.079 6.26667 695.512 8.76666 695.512 12.5C695.512 15.0333 696.046 17.9667 697.112 21.3C698.179 24.6333 699.546 28.2 701.212 32C702.812 35.7333 704.612 39.6333 706.612 43.7C708.679 47.7667 710.679 51.8 712.613 55.8C714.613 59.8 716.446 63.7 718.113 67.5C719.779 71.2333 721.079 74.7 722.013 77.9C724.013 77.2333 725.746 76.2 727.213 74.8C728.679 73.3333 729.879 71.6 730.813 69.6C731.813 67.5333 732.513 65.2667 732.913 62.8C733.379 60.3333 733.613 57.7 733.613 54.9ZM747.634 68.8C747.634 69.4 747.467 69.8333 747.134 70.1C746.867 70.3667 746.567 70.5 746.234 70.5C745.767 70.5 745.334 70.3333 744.934 70C744.6 69.6667 744.434 69.1333 744.434 68.4C744.434 68.0667 744.5 67.7667 744.634 67.5C744.9 66.9 745.3 66.6 745.834 66.6C746.3 66.6 746.7 66.8333 747.034 67.3C747.434 67.7 747.634 68.2 747.634 68.8ZM750.134 78.4C750.134 79 749.967 79.4333 749.634 79.7C749.367 79.9667 749.067 80.1 748.734 80.1C748.267 80.1 747.834 79.9333 747.434 79.6C747.1 79.2667 746.934 78.7333 746.934 78C746.934 77.6667 747 77.3667 747.134 77.1C747.4 76.5 747.8 76.2 748.334 76.2C748.8 76.2 749.2 76.4333 749.534 76.9C749.934 77.3 750.134 77.8 750.134 78.4Z" fill="none" stroke="#F5E3CD" stroke-width="2"/>
          </g>
          <defs>
            <clipPath id="clip0_0_1">
              <rect width="767" height="106" fill="white"/>
            </clipPath>
          </defs>
        </svg>  
      </div>
      <nav id="navItems">
        <div className="background"></div>
        <div className= "navContainer">
          <a className="underlineAnimation" href="#">Home</a>
          <a className="underlineAnimation" href="#">Projects</a>
          <a className="underlineAnimation" href="#">About</a>
          <a className="underlineAnimation" href="#">Contact</a>
        </div>
      </nav>
    </div>
  );
};

export default ProjectsPage;
