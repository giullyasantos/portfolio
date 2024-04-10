import React, { useEffect } from 'react'; 
import '../styles/styles.css'
import NavBar from '../components/NavBar';


const HomePage = () => {
  
  useEffect(() => {
    const container = document.getElementById('container');
    const actionBtn = document.getElementById('menu'); // Using one button for toggle
  
    let isRegister = true; // State to toggle between register and login actions
  
    const handleActionClick = () => {
      if (isRegister) {
        // Register action
        container.classList.add("active");
      } else {
        // Login action
        container.classList.remove("active");
      }
      isRegister = !isRegister; // Toggle the state for the next click
    };
  
    actionBtn.addEventListener('click', handleActionClick);
  
    return () => {
      // Clean up the event listener
      actionBtn.removeEventListener('click', handleActionClick);
    };
  }, []);
  

  return (
    <div className='body'> 
    <NavBar/> 
      <div className='container' id= 'container'>
        <div clasNames='form-container sign-in'>
          <div className='title'>
            <svg id='giullyavitoria' width="513" height="330" viewBox="0 0 342 220" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="342" height="220" fill="none"/>
              <path d="M61.6 93.6C62.9 93 64.2 92.3 65.3 91.4L65.9 92C64.8 92.9 63.5 93.8 62.1 94.6C56.8 97.5 48.6 97.9 41.5 99.8C46.4 115.2 58.2 137.9 58.2 145C58.2 149.6 56.7 152.7 52.2 152.7C41.5 152.7 26 128 26 117.1C26 105.8 31.8 101.4 39.3 99.1C38.9 97.9 38.6 96.7 38.3 95.5C38.2 95.1 37.9 95.1 37.7 95.1C37.2 95.8 32.7 98.9 28.5 98.9C22.6 98.9 20 95.3 20 91.6C20 87.9 22.7 84.1 27.2 84.1C32.4 84.1 35.3 87.1 36.2 88.5C36.3 88.6 36.4 88.9 36.4 89.2C36.4 89.7 36.2 90.3 35.7 90.3C35.5 90.3 35.3 90.2 35 90C35 90 35 89.9 34.9 89.9C33.3 88.8 30.1 86.3 27 86.3C23.1 86.3 21.5 87.9 21.5 89.8C21.5 92.8 25.3 96.6 30.8 96.6C33.9 96.6 38.4 94.7 38.4 90.9C38.4 90.8 38.4 90.6 38.3 89.3C38.3 88.1 38.5 86.9 39.5 86.8C40.1 86.8 40.2 87.2 40.2 87.8C40.2 89.9 39.7 89.8 39.7 91.2C39.7 92.2 39.9 93.3 40.1 94.4C40.4 95.7 40.7 97.1 41.2 98.5C47.9 96.8 55.6 96.2 61.6 93.6ZM27.7 116C27.7 128.4 43.3 149.8 54 149.8C55.8 149.8 56.5 148.4 56.5 146.2C56.5 137.8 45.1 117.8 39.7 100.3C33 102.5 27.7 106.5 27.7 116ZM63.4078 77.3C64.3078 77.3 65.0078 78.3 65.0078 79.3C65.0078 80.4 64.4078 80.9 63.8078 80.9C63.1078 80.9 62.2078 80.2 62.2078 78.9C62.2078 78.9 62.2078 77.3 63.4078 77.3ZM64.5078 88C64.5078 87.6 65.2078 87 65.7078 87C65.9078 87 66.0078 87.1 66.1078 87.3C66.6078 93.4 72.9078 96.4 80.3078 96.4C84.3078 96.4 88.5078 95.5 92.4078 93.8C93.9078 93.1 95.3078 92.4 96.6078 91.4L97.2078 92C96.0078 93.1 94.4078 94.1 92.8078 94.9C87.2078 97.4 81.8078 98.7 77.3078 98.7C69.7078 98.7 64.5078 95.1 64.5078 88ZM140.255 94.9C140.255 94.9 133.155 98.6 126.655 98.6C122.955 98.6 119.455 97.4 117.555 93.6C114.955 96.8 111.955 99.1 108.055 99.1C99.2555 99.1 95.7555 91.2 95.7555 87.8C95.7555 87 96.7555 86.3 97.3555 86.3C97.6555 86.3 97.7555 86.4 97.7555 86.7C98.5555 91.5 104.355 96.5 109.455 96.5C112.255 96.5 114.855 95 116.155 90.9C117.055 88.2 116.855 88.1 117.455 88.1C117.955 88.1 118.255 88.8 118.655 89.9C120.255 94.7 124.155 96.4 128.755 96.4C132.355 96.4 136.355 95.3 139.855 93.8C141.355 93.1 142.755 92.4 144.055 91.4L144.655 92C143.455 93.1 141.855 94.1 140.255 94.9ZM157.219 64.1C157.219 74.4 154.019 84.6 145.319 92.2C148.219 99 150.319 103.8 150.619 104.8C150.819 105.4 150.919 105.9 150.919 106.3C150.919 107.1 150.619 107.7 149.919 107.7C149.319 107.7 148.719 107 148.019 105.2C142.219 89 123.919 54.1 123.919 35.4C123.919 30.3 125.119 20.6 133.419 20C142.719 20 157.219 42.4 157.219 64.1ZM125.319 33.5C125.319 44 137.519 73.7 144.919 91.3C152.719 83.9 155.819 74.4 155.819 64.7C155.819 43.8 141.719 22.4 132.419 22.4C126.519 22.4 125.319 28.6 125.319 33.5ZM173.625 64.1C173.625 74.4 170.425 84.6 161.725 92.2C164.625 99 166.725 103.8 167.025 104.8C167.225 105.4 167.325 105.9 167.325 106.3C167.325 107.1 167.025 107.7 166.325 107.7C165.725 107.7 165.125 107 164.425 105.2C158.625 89 140.325 54.1 140.325 35.4C140.325 30.3 141.525 20.6 149.825 20C159.125 20 173.625 42.4 173.625 64.1ZM141.725 33.5C141.725 44 153.925 73.7 161.325 91.3C169.125 83.9 172.225 74.4 172.225 64.7C172.225 43.8 158.125 22.4 148.825 22.4C142.925 22.4 141.725 28.6 141.725 33.5ZM177.231 88.5C177.231 90.6 182.531 96.1 188.231 96.1C192.131 96.1 194.631 93.3 194.631 90.2C194.631 89.3 194.031 87.8 194.031 87.3C194.031 86.6 194.631 85.9 195.331 85.9C195.831 85.9 196.131 86.5 196.431 87.6C197.231 91.2 198.331 95 199.631 98.7C202.331 97.7 205.531 97.1 209.331 97.1C213.631 97.1 213.631 98 213.631 98C213.531 99.1 213.631 99.6 212.631 99.6C212.331 99.6 212.031 99.5 211.531 99.5C210.531 99.4 209.431 99.4 208.531 99.4C205.331 99.4 202.631 99.8 200.231 100.6C206.331 118.4 215.431 137.2 215.431 146.1C215.431 149.3 214.231 151.3 211.131 151.3C197.731 151.3 187.331 133.5 187.331 118.7C187.331 110.6 190.331 103.2 197.731 99.5C197.031 97.5 196.431 95.4 195.831 93.3C195.731 93 195.631 92.9 195.531 92.9C195.431 92.9 195.331 93 195.131 93.2C195.131 93.2 192.331 99 186.331 99C181.831 99 175.431 94.2 175.431 89C175.431 88.1 175.731 87.8 176.031 87.8C176.531 87.8 177.231 88.5 177.231 88.5ZM188.631 118.3C188.631 132.1 198.931 148.4 211.431 148.4C213.231 148.4 213.931 147.3 213.931 145.2C213.931 137.9 204.631 119.6 198.331 101.3C191.431 104.5 188.631 111 188.631 118.3ZM244.398 96.4C248.998 96.4 256.398 95.3 261.498 91.4L262.098 92C256.798 96.5 247.298 99.1 239.898 99.1C234.898 99.1 230.898 95.3 230.898 95.3C229.198 97.9 226.898 99 224.498 99C219.898 99 215.198 95 215.198 90C215.198 86.7 217.298 83.8 221.598 83.8C226.198 84.3 229.198 87 229.198 89.1C229.198 89.6 228.698 90 228.198 90C226.298 90 225.998 85.9 220.298 85.9C217.798 85.9 216.898 86.8 216.898 88.1C216.898 91.4 222.798 97.2 225.898 97.2C230.098 97.2 229.098 91.5 230.898 91.5C233.098 91.5 235.098 96.4 244.398 96.4Z" fill="none" stroke="#F7EDB9" stroke-width="0.75"/>
              <path d="M97.4 174.6C87.4 174.6 85.7 163.2 85.7 162.1C85.7 161.5 86.1 161.2 86.4 161.2C87.4 161.2 87.9 163.3 87.9 163.3C88.6 165.3 92.2 171.3 97 171.3C101.6 171.3 101.7 165.1 101.7 165.1C101.7 164.7 101.8 164.6 102 164.6C102.3 164.6 102.7 164.9 102.7 164.9C102.8 165.3 102.9 165.9 102.9 166.5C102.9 169.6 101.3 174.6 97.4 174.6ZM94.1 160.7C94.1 159.3 94.6 158.7 95.9 158.7C97.6 158.7 97.9 161.2 106 161.2C114 161.2 113.4 160.5 115.5 160.5C116.2 160.5 116.6 160.8 116.6 161.2C116.6 162 108.4 163.8 101.9 163.8C97.6 163.8 94.1 163 94.1 160.7ZM114.83 152.3C115.73 152.3 116.43 153.3 116.43 154.3C116.43 155.4 115.83 155.9 115.23 155.9C114.53 155.9 113.63 155.2 113.63 153.9C113.63 153.9 113.63 152.3 114.83 152.3ZM115.93 163C115.93 162.6 116.63 162 117.13 162C117.33 162 117.43 162.1 117.53 162.3C118.03 168.4 124.33 171.4 131.73 171.4C135.73 171.4 139.93 170.5 143.83 168.8C145.33 168.1 146.73 167.4 148.03 166.4L148.63 167C147.43 168.1 145.83 169.1 144.23 169.9C138.63 172.4 133.23 173.7 128.73 173.7C121.13 173.7 115.93 170.1 115.93 163ZM55.4773 135.3C77.9773 135.3 110.377 134.5 135.877 134C133.677 127.3 131.377 119 131.377 114.2C131.377 111.2 132.877 104.4 136.977 104.4C145.177 104.4 152.677 118.3 155.077 133.8C157.477 133.7 159.577 133.7 161.577 133.7C162.277 133.7 163.377 133.2 164.377 133.2C165.377 133.2 165.977 134 165.977 135C165.977 135.7 165.477 135.9 164.277 135.9H155.377C155.677 138.6 155.877 141.3 155.877 143.9C155.877 152.2 154.177 160.2 150.177 166.1C151.977 170.9 153.177 174.1 153.377 174.4C153.677 175.1 153.877 176 153.877 176.6C153.877 177.1 153.777 177.5 152.777 177.7C151.977 177.7 151.077 177.2 150.377 175.1C149.577 172.4 138.877 142.5 137.777 139.6L136.577 136.1C108.377 136.4 76.0773 137.1 55.2773 138C54.1773 138 53.7773 137.5 53.7773 136.9C53.7773 136.2 54.3773 135.3 55.4773 135.3ZM136.777 107.6C134.177 107.6 132.677 109.2 132.677 112C132.677 117.1 134.377 122.1 138.577 134C143.977 134 148.977 133.8 153.377 133.8C151.077 119.9 144.777 107.6 136.777 107.6ZM154.277 144.5C154.277 141.7 154.077 138.8 153.677 135.9C149.077 135.9 144.377 135.9 139.377 136C142.577 145.2 146.777 156.7 149.677 164.8C152.877 159.5 154.277 152.2 154.277 144.5ZM194.202 167C190.502 170.2 186.102 171.6 182.402 171.6C181.302 171.6 180.202 171.5 179.302 171.3C178.302 173 176.302 174.7 172.502 174.7C166.902 174.7 164.002 169.5 164.002 165.1C164.002 161.9 165.502 159.2 168.802 159.2C169.702 159.2 170.902 159.4 170.902 160.6C170.902 160.9 170.802 161.3 169.902 161.3C169.102 161.2 168.402 161.1 167.802 161.1C166.302 161.1 165.602 162.2 165.602 163.7C165.602 167 168.802 172.1 174.002 172.1C175.702 172.1 177.102 171.7 177.902 170.8C175.402 169.7 173.702 167.6 173.702 164.6C173.702 162 174.602 160.9 175.602 160.9C177.502 160.9 180.002 164.3 180.002 168.5C180.002 168.9 180.002 169.3 179.902 169.7C180.902 170.2 182.002 170.4 183.402 170.4C186.102 170.4 189.402 169.4 193.602 166.4L194.202 167ZM179.002 167.9C179.002 165.6 178.402 163.1 176.602 163.1C176.002 163.1 175.602 163.4 175.602 164C175.602 165.3 176.602 167.7 178.802 169.2C178.902 168.8 179.002 168.4 179.002 167.9ZM166.902 154.8C172.502 153 176.402 151.1 176.402 148.3C176.402 147.5 175.802 147.2 175.002 147.2C174.702 147.2 174.402 147.3 174.002 147.7C173.002 148.7 174.602 150.8 166.702 153.9C166.502 154 166.402 154.3 166.402 154.5C166.402 154.7 166.502 154.8 166.702 154.8H166.902ZM191.485 168.9L190.685 168.2C192.585 167.2 193.685 166.2 193.685 165.1C193.685 164.2 192.985 163.2 191.285 162.2C189.285 161 187.885 160.1 187.885 159C187.885 158.7 188.085 157.8 188.685 157.8C190.485 157.8 190.985 160.8 198.585 160.8C199.785 160.8 200.485 160.5 201.385 160.5C202.385 160.5 203.085 160.9 203.085 161.6C203.085 162.5 202.485 162.5 202.485 164.2C202.485 169 208.585 170.7 213.885 170.7C215.785 170.7 217.485 170.5 218.885 170.1C221.585 169.3 224.285 168.1 226.585 166.4L227.185 167C225.085 168.8 222.285 170.3 219.285 171.4C217.285 172.2 213.685 173.1 210.185 173.1C205.385 173.1 200.785 171.4 200.785 165.2C200.785 164.7 200.785 164.2 200.885 163.7C200.885 163.4 200.485 163.3 199.285 163.3H196.385C195.385 163.3 194.885 163.3 194.085 162.9C194.985 164 195.285 164.6 195.285 165.1C195.285 166.4 193.785 167.4 191.485 168.9ZM224.693 152.3C225.593 152.3 226.293 153.3 226.293 154.3C226.293 155.4 225.693 155.9 225.093 155.9C224.393 155.9 223.493 155.2 223.493 153.9C223.493 153.9 223.493 152.3 224.693 152.3ZM225.793 163C225.793 162.6 226.493 162 226.993 162C227.193 162 227.293 162.1 227.393 162.3C227.893 168.4 234.193 171.4 241.593 171.4C245.593 171.4 249.793 170.5 253.693 168.8C255.193 168.1 256.593 167.4 257.893 166.4L258.493 167C257.293 168.1 255.693 169.1 254.093 169.9C248.493 172.4 243.093 173.7 238.593 173.7C230.993 173.7 225.793 170.1 225.793 163ZM286.641 171.4C291.241 171.4 298.641 170.3 303.741 166.4L304.341 167C299.041 171.5 289.541 174.1 282.141 174.1C277.141 174.1 273.141 170.3 273.141 170.3C271.441 172.9 269.141 174 266.741 174C262.141 174 257.441 170 257.441 165C257.441 161.7 259.541 158.8 263.841 158.8C268.441 159.3 271.441 162 271.441 164.1C271.441 164.6 270.941 165 270.441 165C268.541 165 268.241 160.9 262.541 160.9C260.041 160.9 259.141 161.8 259.141 163.1C259.141 166.4 265.041 172.2 268.141 172.2C272.341 172.2 271.341 166.5 273.141 166.5C275.341 166.5 277.341 171.4 286.641 171.4Z" fill="none" stroke="#F7EDB9" stroke-width="0.75"/>
              <path d="M20.98 203H20.45L23.48 196.47H24.02L27.05 203H26.49L25.46 200.75H22.01L20.98 203ZM23.71 197.05L22.2 200.34H25.27L23.77 197.05H23.71ZM36.7461 201.58L37.0861 201.91C36.3661 202.61 35.3161 203.14 34.0761 203.14C32.0161 203.14 30.4761 201.61 30.4761 199.73C30.4761 197.86 32.0261 196.33 34.0561 196.33C35.1861 196.33 36.2361 196.76 36.9461 197.41L36.6061 197.76C35.9661 197.16 35.0161 196.78 34.0661 196.78C32.3261 196.78 31.0061 198.12 31.0061 199.73C31.0061 201.36 32.3361 202.69 34.0861 202.69C35.1461 202.69 36.0861 202.22 36.7461 201.58ZM39.4767 203H38.9667V196.47H42.5567C43.3567 196.47 43.9167 196.69 44.2967 197.09C44.5967 197.41 44.7867 197.84 44.7867 198.32C44.7867 199.2 44.1567 199.93 43.1367 200.07L44.8167 203H44.2367L42.6167 200.12H39.4767V203ZM42.5567 196.92H39.4767V199.67H42.8167C43.7167 199.67 44.2767 199.04 44.2767 198.31C44.2767 197.95 44.1367 197.63 43.9067 197.39C43.5867 197.06 43.1467 196.92 42.5567 196.92ZM50.2852 199.3V199.75H47.4552V202.55H52.3352V203H46.9452V196.47H52.1252V196.92H47.4552V199.3H50.2852ZM53.7925 203H53.2625L56.2925 196.47H56.8325L59.8625 203H59.3025L58.2725 200.75H54.8225L53.7925 203ZM56.5225 197.05L55.0125 200.34H58.0825L56.5825 197.05H56.5225ZM60.1052 196.92V196.47H65.6252V196.92H63.1252V203H62.6152V196.92H60.1052ZM67.797 203H67.287V196.47H67.797V203ZM75.6409 196.47H76.1909L73.1409 203H72.6109L69.5609 196.47H70.1409L72.8609 202.38H72.9209L75.6409 196.47ZM81.3009 199.3V199.75H78.4709V202.55H83.3509V203H77.9609V196.47H83.1409V196.92H78.4709V199.3H81.3009ZM87.9142 203H87.4042V196.47H92.4342V196.92H87.9142V199.46H90.7442V199.91H87.9142V203ZM94.4279 203H93.9179V196.47H97.5079C98.3079 196.47 98.8679 196.69 99.2479 197.09C99.5479 197.41 99.7379 197.84 99.7379 198.32C99.7379 199.2 99.1079 199.93 98.0879 200.07L99.7679 203H99.1879L97.5679 200.12H94.4279V203ZM97.5079 196.92H94.4279V199.67H97.7679C98.6679 199.67 99.2279 199.04 99.2279 198.31C99.2279 197.95 99.0879 197.63 98.8579 197.39C98.5379 197.06 98.0979 196.92 97.5079 196.92ZM101.296 199.72C101.296 197.85 102.856 196.33 104.846 196.33C106.836 196.33 108.426 197.85 108.426 199.72C108.426 201.62 106.836 203.14 104.846 203.14C102.856 203.14 101.296 201.62 101.296 199.72ZM101.836 199.72C101.836 201.36 103.156 202.69 104.846 202.69C106.546 202.69 107.896 201.36 107.896 199.72C107.896 198.1 106.546 196.78 104.846 196.78C103.156 196.78 101.836 198.1 101.836 199.72ZM115.69 196.47H116.2V203H115.7L111.01 197.31H111V203H110.49V196.47H110.99L115.68 202.16H115.69V196.47ZM117.849 196.92V196.47H123.369V196.92H120.869V203H120.359V196.92H117.849ZM123.63 200.74V200.28H126.2V200.74H123.63ZM131.164 199.3V199.75H128.334V202.55H133.214V203H127.824V196.47H133.004V196.92H128.334V199.3H131.164ZM140.221 196.47H140.731V203H140.231L135.541 197.31H135.531V203H135.021V196.47H135.521L140.211 202.16H140.221V196.47ZM145.971 203H143.391V196.47H145.971C147.231 196.47 147.931 196.84 148.581 197.43C149.171 198.02 149.511 198.83 149.511 199.73C149.511 200.64 149.151 201.47 148.551 202.07C147.901 202.65 147.241 203 145.971 203ZM143.901 202.55H145.951C147.061 202.55 147.591 202.24 148.151 201.75C148.661 201.23 148.981 200.52 148.981 199.73C148.981 198.95 148.681 198.24 148.161 197.73C147.611 197.23 147.051 196.92 145.951 196.92H143.901V202.55ZM156.42 203H153.84V196.47H156.42C157.68 196.47 158.38 196.84 159.03 197.43C159.62 198.02 159.96 198.83 159.96 199.73C159.96 200.64 159.6 201.47 159 202.07C158.35 202.65 157.69 203 156.42 203ZM154.35 202.55H156.4C157.51 202.55 158.04 202.24 158.6 201.75C159.11 201.23 159.43 200.52 159.43 199.73C159.43 198.95 159.13 198.24 158.61 197.73C158.06 197.23 157.5 196.92 156.4 196.92H154.35V202.55ZM165.383 199.3V199.75H162.553V202.55H167.433V203H162.043V196.47H167.223V196.92H162.553V199.3H165.383ZM174.42 196.47H174.97L171.92 203H171.39L168.34 196.47H168.92L171.64 202.38H171.7L174.42 196.47ZM180.08 199.3V199.75H177.25V202.55H182.13V203H176.74V196.47H181.92V196.92H177.25V199.3H180.08ZM183.937 196.47H184.447V202.55H188.717V203H183.937V196.47ZM189.314 199.72C189.314 197.85 190.874 196.33 192.864 196.33C194.854 196.33 196.444 197.85 196.444 199.72C196.444 201.62 194.854 203.14 192.864 203.14C190.874 203.14 189.314 201.62 189.314 199.72ZM189.854 199.72C189.854 201.36 191.174 202.69 192.864 202.69C194.564 202.69 195.914 201.36 195.914 199.72C195.914 198.1 194.564 196.78 192.864 196.78C191.174 196.78 189.854 198.1 189.854 199.72ZM199.018 203H198.508V196.47H201.928C202.688 196.47 203.248 196.66 203.668 197.1C203.988 197.43 204.158 197.84 204.158 198.29C204.158 198.78 203.948 199.23 203.608 199.56C203.208 199.95 202.648 200.12 201.928 200.12H199.018V203ZM201.928 196.92H199.018V199.67H201.928C202.418 199.67 202.878 199.59 203.238 199.24C203.498 198.98 203.648 198.65 203.648 198.29C203.648 197.96 203.528 197.66 203.278 197.4C202.958 197.05 202.518 196.92 201.928 196.92ZM209.309 199.3V199.75H206.479V202.55H211.359V203H205.969V196.47H211.149V196.92H206.479V199.3H209.309ZM213.676 203H213.166V196.47H216.756C217.556 196.47 218.116 196.69 218.496 197.09C218.796 197.41 218.986 197.84 218.986 198.32C218.986 199.2 218.356 199.93 217.336 200.07L219.016 203H218.436L216.816 200.12H213.676V203ZM216.756 196.92H213.676V199.67H217.016C217.916 199.67 218.476 199.04 218.476 198.31C218.476 197.95 218.336 197.63 218.106 197.39C217.786 197.06 217.346 196.92 216.756 196.92ZM222.845 203H222.315L225.345 196.47H225.885L228.915 203H228.355L227.325 200.75H223.875L222.845 203ZM225.575 197.05L224.065 200.34H227.135L225.635 197.05H225.575ZM235.895 196.47H236.405V203H235.905L231.215 197.31H231.205V203H230.695V196.47H231.195L235.885 202.16H235.895V196.47ZM241.644 203H239.064V196.47H241.644C242.904 196.47 243.604 196.84 244.254 197.43C244.844 198.02 245.184 198.83 245.184 199.73C245.184 200.64 244.824 201.47 244.224 202.07C243.574 202.65 242.914 203 241.644 203ZM239.574 202.55H241.624C242.734 202.55 243.264 202.24 243.824 201.75C244.334 201.23 244.654 200.52 244.654 199.73C244.654 198.95 244.354 198.24 243.834 197.73C243.284 197.23 242.724 196.92 241.624 196.92H239.574V202.55ZM248.518 196.47H249.078L250.928 202.26H250.968L252.808 196.47H253.268L255.108 202.26H255.158L256.998 196.47H257.538L255.428 203H254.848L253.048 197.37H253.008L251.208 203H250.628L248.518 196.47ZM262.736 199.3V199.75H259.906V202.55H264.786V203H259.396V196.47H264.576V196.92H259.906V199.3H262.736ZM270.294 203H266.594V196.47H270.144C270.864 196.47 271.404 196.67 271.784 197.05C272.054 197.33 272.224 197.67 272.224 198.08C272.224 198.74 271.784 199.36 271.144 199.52C271.974 199.64 272.514 200.34 272.514 201.15C272.514 201.6 272.344 202.06 271.954 202.43C271.564 202.81 271.054 203 270.294 203ZM270.604 199.83H267.104V202.55H270.304C270.784 202.55 271.234 202.44 271.574 202.11C271.844 201.84 271.994 201.49 271.994 201.14C271.994 200.79 271.854 200.48 271.624 200.25C271.374 199.99 271.004 199.83 270.604 199.83ZM270.104 196.92H267.104V199.41H270.404C270.764 199.41 271.084 199.28 271.324 199.05C271.554 198.81 271.694 198.5 271.694 198.16C271.694 197.84 271.564 197.56 271.354 197.35C271.064 197.05 270.664 196.92 270.104 196.92ZM274.187 200.74V200.28H276.757V200.74H274.187ZM280.961 203H278.381V196.47H280.961C282.221 196.47 282.921 196.84 283.571 197.43C284.161 198.02 284.501 198.83 284.501 199.73C284.501 200.64 284.141 201.47 283.541 202.07C282.891 202.65 282.231 203 280.961 203ZM278.891 202.55H280.941C282.051 202.55 282.581 202.24 283.141 201.75C283.651 201.23 283.971 200.52 283.971 199.73C283.971 198.95 283.671 198.24 283.151 197.73C282.601 197.23 282.041 196.92 280.941 196.92H278.891V202.55ZM289.924 199.3V199.75H287.094V202.55H291.974V203H286.584V196.47H291.764V196.92H287.094V199.3H289.924ZM298.771 197.28L298.461 197.63C298.041 197.26 297.181 196.77 295.971 196.77C295.041 196.77 293.951 197.12 293.951 198.14C293.951 199.15 295.181 199.2 296.331 199.26C297.451 199.33 299.281 199.43 299.281 201.07C299.281 202.51 297.891 203.14 296.311 203.14C294.721 203.14 293.741 202.47 293.081 201.83L293.391 201.48C293.971 202.04 294.871 202.7 296.321 202.7C297.641 202.7 298.771 202.21 298.771 201.13C298.771 199.94 297.421 199.82 296.331 199.75C294.971 199.68 293.441 199.59 293.441 198.18C293.441 196.78 294.861 196.33 295.991 196.33C297.291 196.33 298.291 196.87 298.771 197.28ZM301.762 203H301.252V196.47H301.762V203ZM310.196 197.32L309.836 197.64C309.216 197.11 308.316 196.78 307.426 196.78C305.696 196.78 304.356 198.11 304.356 199.73C304.356 201.32 305.646 202.69 307.466 202.69C308.366 202.69 309.256 202.37 309.846 201.88V200.01H307.616V199.56H310.316V202.12C309.566 202.74 308.496 203.14 307.436 203.14C305.416 203.14 303.826 201.61 303.826 199.73C303.826 197.85 305.426 196.33 307.416 196.33C308.436 196.33 309.426 196.7 310.196 197.32ZM317.839 196.47H318.349V203H317.849L313.159 197.31H313.149V203H312.639V196.47H313.139L317.829 202.16H317.839V196.47ZM324.348 199.3V199.75H321.518V202.55H326.398V203H321.008V196.47H326.188V196.92H321.518V199.3H324.348ZM328.715 203H328.205V196.47H331.795C332.595 196.47 333.155 196.69 333.535 197.09C333.835 197.41 334.025 197.84 334.025 198.32C334.025 199.2 333.395 199.93 332.375 200.07L334.055 203H333.475L331.855 200.12H328.715V203ZM331.795 196.92H328.715V199.67H332.055C332.955 199.67 333.515 199.04 333.515 198.31C333.515 197.95 333.375 197.63 333.145 197.39C332.825 197.06 332.385 196.92 331.795 196.92Z" fill="none" stroke="#F7EDB9" stroke-width="0.25"/>
            </svg>
          </div>
        </div>
        <div className='form-container sign-up'>
          <nav id='navItems'>
              <div className= 'navContainer'>
                  <a className='underlineAnimation' href="#">Home</a>
                  <a className='underlineAnimation' href="#">Projects</a>
                  <a className='underlineAnimation' href="#">About</a>
                  <a className='underlineAnimation' href="#">Contact</a>
              </div>
          </nav>    
        </div>
        <div className="toggle-container">
            <div className="toggle">
                <div className="toggle-panel toggle-left"/>
                <div className="toggle-panel toggle-right"/>
            </div>
        </div>
      </div>
    </div>
  );
};


export default HomePage;
