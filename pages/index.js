import Head from 'next/head'
import Image from 'next/image'
import Header from '../Components/Header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Header/>
      <div className={styles.HomeLanding}>
        <h1 className={styles.LandingHeading}>WORIED ABOUT YOUR KID GROWING UP?</h1>
        <img src='parrotWithABlob.png' className={styles.LandingLogo}/>
        <svg className={styles.speechBubble} width="600" height="258" viewBox="0 0 600 258" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_d_19_42)">
  <g filter="url(#filter1_d_19_42)">
  <path d="M5 247.276C67.4 252.859 77.3333 187.783 74 153.55C96.5 151.057 133.6 155.644 106 201.908C78.4 248.173 27.1667 251.43 5 247.276Z" fill="white"/>
  <path d="M5 247.276C67.4 252.859 77.3333 187.783 74 153.55C96.5 151.057 133.6 155.644 106 201.908C78.4 248.173 27.1667 251.43 5 247.276Z" stroke="white"/>
  </g>
  <rect x="73.5" width="522" height="208.389" rx="36" fill="white"/>
  <path d="M135.548 69.252C135.548 71.34 134.828 73.08 133.388 74.472C131.972 75.84 129.8 76.524 126.872 76.524H122.048V87H118.772V61.908H126.872C129.704 61.908 131.852 62.592 133.316 63.96C134.804 65.328 135.548 67.092 135.548 69.252ZM126.872 73.824C128.696 73.824 130.04 73.428 130.904 72.636C131.768 71.844 132.2 70.716 132.2 69.252C132.2 66.156 130.424 64.608 126.872 64.608H122.048V73.824H126.872ZM157.116 67.272V87H153.84V84.084C153.216 85.092 152.34 85.884 151.212 86.46C150.108 87.012 148.884 87.288 147.54 87.288C146.004 87.288 144.624 86.976 143.4 86.352C142.176 85.704 141.204 84.744 140.484 83.472C139.788 82.2 139.44 80.652 139.44 78.828V67.272H142.68V78.396C142.68 80.34 143.172 81.84 144.156 82.896C145.14 83.928 146.484 84.444 148.188 84.444C149.94 84.444 151.32 83.904 152.328 82.824C153.336 81.744 153.84 80.172 153.84 78.108V67.272H157.116ZM165.923 70.944C166.595 69.768 167.579 68.808 168.875 68.064C170.171 67.32 171.647 66.948 173.303 66.948C175.079 66.948 176.675 67.368 178.091 68.208C179.507 69.048 180.623 70.236 181.439 71.772C182.255 73.284 182.663 75.048 182.663 77.064C182.663 79.056 182.255 80.832 181.439 82.392C180.623 83.952 179.495 85.164 178.055 86.028C176.639 86.892 175.055 87.324 173.303 87.324C171.599 87.324 170.099 86.952 168.803 86.208C167.531 85.464 166.571 84.516 165.923 83.364V87H162.647V60.36H165.923V70.944ZM179.315 77.064C179.315 75.576 179.015 74.28 178.415 73.176C177.815 72.072 176.999 71.232 175.967 70.656C174.959 70.08 173.843 69.792 172.619 69.792C171.419 69.792 170.303 70.092 169.271 70.692C168.263 71.268 167.447 72.12 166.823 73.248C166.223 74.352 165.923 75.636 165.923 77.1C165.923 78.588 166.223 79.896 166.823 81.024C167.447 82.128 168.263 82.98 169.271 83.58C170.303 84.156 171.419 84.444 172.619 84.444C173.843 84.444 174.959 84.156 175.967 83.58C176.999 82.98 177.815 82.128 178.415 81.024C179.015 79.896 179.315 78.576 179.315 77.064ZM188.667 64.068C188.043 64.068 187.515 63.852 187.083 63.42C186.651 62.988 186.435 62.46 186.435 61.836C186.435 61.212 186.651 60.684 187.083 60.252C187.515 59.82 188.043 59.604 188.667 59.604C189.267 59.604 189.771 59.82 190.179 60.252C190.611 60.684 190.827 61.212 190.827 61.836C190.827 62.46 190.611 62.988 190.179 63.42C189.771 63.852 189.267 64.068 188.667 64.068ZM190.251 67.272V87H186.975V67.272H190.251ZM213.835 76.38C213.835 77.004 213.799 77.664 213.727 78.36H197.959C198.079 80.304 198.739 81.828 199.939 82.932C201.163 84.012 202.639 84.552 204.367 84.552C205.783 84.552 206.959 84.228 207.895 83.58C208.855 82.908 209.527 82.02 209.911 80.916H213.439C212.911 82.812 211.855 84.36 210.271 85.56C208.687 86.736 206.719 87.324 204.367 87.324C202.495 87.324 200.815 86.904 199.327 86.064C197.863 85.224 196.711 84.036 195.871 82.5C195.031 80.94 194.611 79.14 194.611 77.1C194.611 75.06 195.019 73.272 195.835 71.736C196.651 70.2 197.791 69.024 199.255 68.208C200.743 67.368 202.447 66.948 204.367 66.948C206.239 66.948 207.895 67.356 209.335 68.172C210.775 68.988 211.879 70.116 212.647 71.556C213.439 72.972 213.835 74.58 213.835 76.38ZM210.451 75.696C210.451 74.448 210.175 73.38 209.623 72.492C209.071 71.58 208.315 70.896 207.355 70.44C206.419 69.96 205.375 69.72 204.223 69.72C202.567 69.72 201.151 70.248 199.975 71.304C198.823 72.36 198.163 73.824 197.995 75.696H210.451ZM236.159 76.38C236.159 77.004 236.123 77.664 236.051 78.36H220.283C220.403 80.304 221.063 81.828 222.263 82.932C223.487 84.012 224.963 84.552 226.691 84.552C228.107 84.552 229.283 84.228 230.219 83.58C231.179 82.908 231.851 82.02 232.235 80.916H235.763C235.235 82.812 234.179 84.36 232.595 85.56C231.011 86.736 229.043 87.324 226.691 87.324C224.819 87.324 223.139 86.904 221.651 86.064C220.187 85.224 219.035 84.036 218.195 82.5C217.355 80.94 216.935 79.14 216.935 77.1C216.935 75.06 217.343 73.272 218.159 71.736C218.975 70.2 220.115 69.024 221.579 68.208C223.067 67.368 224.771 66.948 226.691 66.948C228.563 66.948 230.219 67.356 231.659 68.172C233.099 68.988 234.203 70.116 234.971 71.556C235.763 72.972 236.159 74.58 236.159 76.38ZM232.775 75.696C232.775 74.448 232.499 73.38 231.947 72.492C231.395 71.58 230.639 70.896 229.679 70.44C228.743 69.96 227.699 69.72 226.547 69.72C224.891 69.72 223.475 70.248 222.299 71.304C221.147 72.36 220.487 73.824 220.319 75.696H232.775ZM253.357 70.908C254.005 69.78 254.965 68.844 256.237 68.1C257.533 67.332 259.033 66.948 260.737 66.948C262.489 66.948 264.073 67.368 265.489 68.208C266.929 69.048 268.057 70.236 268.873 71.772C269.689 73.284 270.097 75.048 270.097 77.064C270.097 79.056 269.689 80.832 268.873 82.392C268.057 83.952 266.929 85.164 265.489 86.028C264.073 86.892 262.489 87.324 260.737 87.324C259.057 87.324 257.569 86.952 256.273 86.208C255.001 85.44 254.029 84.492 253.357 83.364V96.36H250.081V67.272H253.357V70.908ZM266.749 77.064C266.749 75.576 266.449 74.28 265.849 73.176C265.249 72.072 264.433 71.232 263.401 70.656C262.393 70.08 261.277 69.792 260.053 69.792C258.853 69.792 257.737 70.092 256.705 70.692C255.697 71.268 254.881 72.12 254.257 73.248C253.657 74.352 253.357 75.636 253.357 77.1C253.357 78.588 253.657 79.896 254.257 81.024C254.881 82.128 255.697 82.98 256.705 83.58C257.737 84.156 258.853 84.444 260.053 84.444C261.277 84.444 262.393 84.156 263.401 83.58C264.433 82.98 265.249 82.128 265.849 81.024C266.449 79.896 266.749 78.576 266.749 77.064ZM273.185 77.064C273.185 75.048 273.593 73.284 274.409 71.772C275.225 70.236 276.341 69.048 277.757 68.208C279.197 67.368 280.793 66.948 282.545 66.948C284.273 66.948 285.773 67.32 287.045 68.064C288.317 68.808 289.265 69.744 289.889 70.872V67.272H293.201V87H289.889V83.328C289.241 84.48 288.269 85.44 286.973 86.208C285.701 86.952 284.213 87.324 282.509 87.324C280.757 87.324 279.173 86.892 277.757 86.028C276.341 85.164 275.225 83.952 274.409 82.392C273.593 80.832 273.185 79.056 273.185 77.064ZM289.889 77.1C289.889 75.612 289.589 74.316 288.989 73.212C288.389 72.108 287.573 71.268 286.541 70.692C285.533 70.092 284.417 69.792 283.193 69.792C281.969 69.792 280.853 70.08 279.845 70.656C278.837 71.232 278.033 72.072 277.433 73.176C276.833 74.28 276.533 75.576 276.533 77.064C276.533 78.576 276.833 79.896 277.433 81.024C278.033 82.128 278.837 82.98 279.845 83.58C280.853 84.156 281.969 84.444 283.193 84.444C284.417 84.444 285.533 84.156 286.541 83.58C287.573 82.98 288.389 82.128 288.989 81.024C289.589 79.896 289.889 78.588 289.889 77.1ZM302.013 70.476C302.589 69.348 303.405 68.472 304.461 67.848C305.541 67.224 306.849 66.912 308.385 66.912V70.296H307.521C303.849 70.296 302.013 72.288 302.013 76.272V87H298.737V67.272H302.013V70.476ZM315.443 70.476C316.019 69.348 316.835 68.472 317.891 67.848C318.971 67.224 320.279 66.912 321.815 66.912V70.296H320.951C317.279 70.296 315.443 72.288 315.443 76.272V87H312.167V67.272H315.443V70.476ZM334.2 87.324C332.352 87.324 330.672 86.904 329.16 86.064C327.672 85.224 326.496 84.036 325.632 82.5C324.792 80.94 324.372 79.14 324.372 77.1C324.372 75.084 324.804 73.308 325.668 71.772C326.556 70.212 327.756 69.024 329.268 68.208C330.78 67.368 332.472 66.948 334.344 66.948C336.216 66.948 337.908 67.368 339.42 68.208C340.932 69.024 342.12 70.2 342.984 71.736C343.872 73.272 344.316 75.06 344.316 77.1C344.316 79.14 343.86 80.94 342.948 82.5C342.06 84.036 340.848 85.224 339.312 86.064C337.776 86.904 336.072 87.324 334.2 87.324ZM334.2 84.444C335.376 84.444 336.48 84.168 337.512 83.616C338.544 83.064 339.372 82.236 339.996 81.132C340.644 80.028 340.968 78.684 340.968 77.1C340.968 75.516 340.656 74.172 340.032 73.068C339.408 71.964 338.592 71.148 337.584 70.62C336.576 70.068 335.484 69.792 334.308 69.792C333.108 69.792 332.004 70.068 330.996 70.62C330.012 71.148 329.22 71.964 328.62 73.068C328.02 74.172 327.72 75.516 327.72 77.1C327.72 78.708 328.008 80.064 328.584 81.168C329.184 82.272 329.976 83.1 330.96 83.652C331.944 84.18 333.024 84.444 334.2 84.444ZM352.62 69.972V81.6C352.62 82.56 352.824 83.244 353.232 83.652C353.64 84.036 354.348 84.228 355.356 84.228H357.768V87H354.816C352.992 87 351.624 86.58 350.712 85.74C349.8 84.9 349.344 83.52 349.344 81.6V69.972H346.788V67.272H349.344V62.304H352.62V67.272H357.768V69.972H352.62ZM373.027 64.068C372.403 64.068 371.875 63.852 371.443 63.42C371.011 62.988 370.795 62.46 370.795 61.836C370.795 61.212 371.011 60.684 371.443 60.252C371.875 59.82 372.403 59.604 373.027 59.604C373.627 59.604 374.131 59.82 374.539 60.252C374.971 60.684 375.187 61.212 375.187 61.836C375.187 62.46 374.971 62.988 374.539 63.42C374.131 63.852 373.627 64.068 373.027 64.068ZM374.611 67.272V87H371.335V67.272H374.611ZM387.178 87.324C385.666 87.324 384.31 87.072 383.11 86.568C381.91 86.04 380.962 85.32 380.266 84.408C379.57 83.472 379.186 82.404 379.114 81.204H382.498C382.594 82.188 383.05 82.992 383.866 83.616C384.706 84.24 385.798 84.552 387.142 84.552C388.39 84.552 389.374 84.276 390.094 83.724C390.814 83.172 391.174 82.476 391.174 81.636C391.174 80.772 390.79 80.136 390.022 79.728C389.254 79.296 388.066 78.876 386.458 78.468C384.994 78.084 383.794 77.7 382.858 77.316C381.946 76.908 381.154 76.32 380.482 75.552C379.834 74.76 379.51 73.728 379.51 72.456C379.51 71.448 379.81 70.524 380.41 69.684C381.01 68.844 381.862 68.184 382.966 67.704C384.07 67.2 385.33 66.948 386.746 66.948C388.93 66.948 390.694 67.5 392.038 68.604C393.382 69.708 394.102 71.22 394.198 73.14H390.922C390.85 72.108 390.43 71.28 389.662 70.656C388.918 70.032 387.91 69.72 386.638 69.72C385.462 69.72 384.526 69.972 383.83 70.476C383.134 70.98 382.786 71.64 382.786 72.456C382.786 73.104 382.99 73.644 383.398 74.076C383.83 74.484 384.358 74.82 384.982 75.084C385.63 75.324 386.518 75.6 387.646 75.912C389.062 76.296 390.214 76.68 391.102 77.064C391.99 77.424 392.746 77.976 393.37 78.72C394.018 79.464 394.354 80.436 394.378 81.636C394.378 82.716 394.078 83.688 393.478 84.552C392.878 85.416 392.026 86.1 390.922 86.604C389.842 87.084 388.594 87.324 387.178 87.324ZM418.392 66.912C419.88 66.912 421.224 67.236 422.424 67.884C423.624 68.508 424.56 69.456 425.232 70.728C425.928 72 426.276 73.548 426.276 75.372V87H423.036V75.84C423.036 73.872 422.544 72.372 421.56 71.34C420.576 70.284 419.232 69.756 417.528 69.756C415.8 69.756 414.42 70.296 413.388 71.376C412.38 72.456 411.876 74.028 411.876 76.092V87H408.6V60.36H411.876V70.08C412.524 69.072 413.412 68.292 414.54 67.74C415.692 67.188 416.976 66.912 418.392 66.912ZM449.627 76.38C449.627 77.004 449.591 77.664 449.519 78.36H433.751C433.871 80.304 434.531 81.828 435.731 82.932C436.955 84.012 438.431 84.552 440.159 84.552C441.575 84.552 442.751 84.228 443.687 83.58C444.647 82.908 445.319 82.02 445.703 80.916H449.231C448.703 82.812 447.647 84.36 446.063 85.56C444.479 86.736 442.511 87.324 440.159 87.324C438.287 87.324 436.607 86.904 435.119 86.064C433.655 85.224 432.503 84.036 431.663 82.5C430.823 80.94 430.403 79.14 430.403 77.1C430.403 75.06 430.811 73.272 431.627 71.736C432.443 70.2 433.583 69.024 435.047 68.208C436.535 67.368 438.239 66.948 440.159 66.948C442.031 66.948 443.687 67.356 445.127 68.172C446.567 68.988 447.671 70.116 448.439 71.556C449.231 72.972 449.627 74.58 449.627 76.38ZM446.243 75.696C446.243 74.448 445.967 73.38 445.415 72.492C444.863 71.58 444.107 70.896 443.147 70.44C442.211 69.96 441.167 69.72 440.015 69.72C438.359 69.72 436.943 70.248 435.767 71.304C434.615 72.36 433.955 73.824 433.787 75.696H446.243ZM457.228 70.476C457.804 69.348 458.62 68.472 459.676 67.848C460.756 67.224 462.064 66.912 463.6 66.912V70.296H462.736C459.064 70.296 457.228 72.288 457.228 76.272V87H453.952V67.272H457.228V70.476ZM485.381 76.38C485.381 77.004 485.345 77.664 485.273 78.36H469.505C469.625 80.304 470.285 81.828 471.485 82.932C472.709 84.012 474.185 84.552 475.913 84.552C477.329 84.552 478.505 84.228 479.441 83.58C480.401 82.908 481.073 82.02 481.457 80.916H484.985C484.457 82.812 483.401 84.36 481.817 85.56C480.233 86.736 478.265 87.324 475.913 87.324C474.041 87.324 472.361 86.904 470.873 86.064C469.409 85.224 468.257 84.036 467.417 82.5C466.577 80.94 466.157 79.14 466.157 77.1C466.157 75.06 466.565 73.272 467.381 71.736C468.197 70.2 469.337 69.024 470.801 68.208C472.289 67.368 473.993 66.948 475.913 66.948C477.785 66.948 479.441 67.356 480.881 68.172C482.321 68.988 483.425 70.116 484.193 71.556C484.985 72.972 485.381 74.58 485.381 76.38ZM481.997 75.696C481.997 74.448 481.721 73.38 481.169 72.492C480.617 71.58 479.861 70.896 478.901 70.44C477.965 69.96 476.921 69.72 475.769 69.72C474.113 69.72 472.697 70.248 471.521 71.304C470.369 72.36 469.709 73.824 469.541 75.696H481.997ZM507.331 69.972H503.191V87H499.915V69.972H497.359V67.272H499.915V65.868C499.915 63.66 500.479 62.052 501.607 61.044C502.759 60.012 504.595 59.496 507.115 59.496V62.232C505.675 62.232 504.655 62.52 504.055 63.096C503.479 63.648 503.191 64.572 503.191 65.868V67.272H507.331V69.972ZM519.755 87.324C517.907 87.324 516.227 86.904 514.715 86.064C513.227 85.224 512.051 84.036 511.187 82.5C510.347 80.94 509.927 79.14 509.927 77.1C509.927 75.084 510.359 73.308 511.223 71.772C512.111 70.212 513.311 69.024 514.823 68.208C516.335 67.368 518.027 66.948 519.899 66.948C521.771 66.948 523.463 67.368 524.975 68.208C526.487 69.024 527.675 70.2 528.539 71.736C529.427 73.272 529.871 75.06 529.871 77.1C529.871 79.14 529.415 80.94 528.503 82.5C527.615 84.036 526.403 85.224 524.867 86.064C523.331 86.904 521.627 87.324 519.755 87.324ZM519.755 84.444C520.931 84.444 522.035 84.168 523.067 83.616C524.099 83.064 524.927 82.236 525.551 81.132C526.199 80.028 526.523 78.684 526.523 77.1C526.523 75.516 526.211 74.172 525.587 73.068C524.963 71.964 524.147 71.148 523.139 70.62C522.131 70.068 521.039 69.792 519.863 69.792C518.663 69.792 517.559 70.068 516.551 70.62C515.567 71.148 514.775 71.964 514.175 73.068C513.575 74.172 513.275 75.516 513.275 77.1C513.275 78.708 513.563 80.064 514.139 81.168C514.739 82.272 515.531 83.1 516.515 83.652C517.499 84.18 518.579 84.444 519.755 84.444ZM537.454 70.476C538.03 69.348 538.846 68.472 539.902 67.848C540.982 67.224 542.29 66.912 543.826 66.912V70.296H542.962C539.29 70.296 537.454 72.288 537.454 76.272V87H534.178V67.272H537.454V70.476ZM128.564 110.912C130.052 110.912 131.396 111.236 132.596 111.884C133.796 112.508 134.732 113.456 135.404 114.728C136.1 116 136.448 117.548 136.448 119.372V131H133.208V119.84C133.208 117.872 132.716 116.372 131.732 115.34C130.748 114.284 129.404 113.756 127.7 113.756C125.972 113.756 124.592 114.296 123.56 115.376C122.552 116.456 122.048 118.028 122.048 120.092V131H118.772V104.36H122.048V114.08C122.696 113.072 123.584 112.292 124.712 111.74C125.864 111.188 127.148 110.912 128.564 110.912ZM159.799 120.38C159.799 121.004 159.763 121.664 159.691 122.36H143.923C144.043 124.304 144.703 125.828 145.903 126.932C147.127 128.012 148.603 128.552 150.331 128.552C151.747 128.552 152.923 128.228 153.859 127.58C154.819 126.908 155.491 126.02 155.875 124.916H159.403C158.875 126.812 157.819 128.36 156.235 129.56C154.651 130.736 152.683 131.324 150.331 131.324C148.459 131.324 146.779 130.904 145.291 130.064C143.827 129.224 142.675 128.036 141.835 126.5C140.995 124.94 140.575 123.14 140.575 121.1C140.575 119.06 140.983 117.272 141.799 115.736C142.615 114.2 143.755 113.024 145.219 112.208C146.707 111.368 148.411 110.948 150.331 110.948C152.203 110.948 153.859 111.356 155.299 112.172C156.739 112.988 157.843 114.116 158.611 115.556C159.403 116.972 159.799 118.58 159.799 120.38ZM156.415 119.696C156.415 118.448 156.139 117.38 155.587 116.492C155.035 115.58 154.279 114.896 153.319 114.44C152.383 113.96 151.339 113.72 150.187 113.72C148.531 113.72 147.115 114.248 145.939 115.304C144.787 116.36 144.127 117.824 143.959 119.696H156.415ZM167.4 104.36V131H164.124V104.36H167.4ZM176.259 114.908C176.907 113.78 177.867 112.844 179.139 112.1C180.435 111.332 181.935 110.948 183.639 110.948C185.391 110.948 186.975 111.368 188.391 112.208C189.831 113.048 190.959 114.236 191.775 115.772C192.591 117.284 192.999 119.048 192.999 121.064C192.999 123.056 192.591 124.832 191.775 126.392C190.959 127.952 189.831 129.164 188.391 130.028C186.975 130.892 185.391 131.324 183.639 131.324C181.959 131.324 180.471 130.952 179.175 130.208C177.903 129.44 176.931 128.492 176.259 127.364V140.36H172.983V111.272H176.259V114.908ZM189.651 121.064C189.651 119.576 189.351 118.28 188.751 117.176C188.151 116.072 187.335 115.232 186.303 114.656C185.295 114.08 184.179 113.792 182.955 113.792C181.755 113.792 180.639 114.092 179.607 114.692C178.599 115.268 177.783 116.12 177.159 117.248C176.559 118.352 176.259 119.636 176.259 121.1C176.259 122.588 176.559 123.896 177.159 125.024C177.783 126.128 178.599 126.98 179.607 127.58C180.639 128.156 181.755 128.444 182.955 128.444C184.179 128.444 185.295 128.156 186.303 127.58C187.335 126.98 188.151 126.128 188.751 125.024C189.351 123.896 189.651 122.576 189.651 121.064ZM201.559 105.908L201.163 123.908H198.427L198.031 105.908H201.559ZM199.939 131.216C199.315 131.216 198.787 131 198.355 130.568C197.923 130.136 197.707 129.608 197.707 128.984C197.707 128.36 197.923 127.832 198.355 127.4C198.787 126.968 199.315 126.752 199.939 126.752C200.539 126.752 201.043 126.968 201.451 127.4C201.883 127.832 202.099 128.36 202.099 128.984C202.099 129.608 201.883 130.136 201.451 130.568C201.043 131 200.539 131.216 199.939 131.216ZM212.282 105.908L211.886 123.908H209.15L208.754 105.908H212.282ZM210.662 131.216C210.038 131.216 209.51 131 209.078 130.568C208.646 130.136 208.43 129.608 208.43 128.984C208.43 128.36 208.646 127.832 209.078 127.4C209.51 126.968 210.038 126.752 210.662 126.752C211.262 126.752 211.766 126.968 212.174 127.4C212.606 127.832 212.822 128.36 212.822 128.984C212.822 129.608 212.606 130.136 212.174 130.568C211.766 131 211.262 131.216 210.662 131.216Z" fill="black"/>
  </g>
  <defs>
  <filter id="filter0_d_19_42" x="0.907898" y="0" width="598.592" height="257.096" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
  <feOffset dy="4"/>
  <feGaussianBlur stdDeviation="2"/>
  <feComposite in2="hardAlpha" operator="out"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_19_42"/>
  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_19_42" result="shape"/>
  </filter>
  <filter id="filter1_d_19_42" x="0.907898" y="152.513" width="119.401" height="104.583" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
  <feOffset dy="4"/>
  <feGaussianBlur stdDeviation="2"/>
  <feComposite in2="hardAlpha" operator="out"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_19_42"/>
  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_19_42" result="shape"/>
  </filter>
  </defs>
        </svg>
        <svg className={styles.LandingCurve} viewBox="0 0 1440 228" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1440 0.666016C1296.65 186.389 420.271 186.067 0 178.146V228H1440V0.666016Z" fill="#00FBBF"/>
        </svg>

      </div>
      {/* getstarted */}
      <div className={styles.HomeGetstarted}>
        <div className={styles.HomeGetstartedTransparentBox}>
          <h1 className={styles.HomeGetstartedTransparentBoxHeader}>
            Get started Now
          </h1>
          <h1 className={styles.HomeGetstartedTransparentBoxsubtext}>Pubiee Parrot will help your kid get around with puberty and live a healthy life</h1>
          <div className={styles.signinBTN}>Sign in</div>
          <div className={styles.alreadyHaveAnAccount}>
            already have an account? 
            <a href=''> Log in.</a>
          </div>
        </div>
      </div>
    </div>
  )
}

