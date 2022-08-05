import { SVGProps } from "react";

const NewsLogo = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg version="1.2" baseProfile="tiny" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg" width="256" height="256" xmlSpace="preserve" {...props}>
    <switch>
      <g>
        <g strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10">
          <path fill="none" stroke="#BABABA" d="M191.5 216c17.397 0 31.5-14.103 31.5-31.5V93l-12 .211M191 216h-5"/>
          <path fill="none" stroke="#BABABA" d="M179.5 211c17.397 0 31.5-14.103 31.5-31.5V88l-10 .154"/>
          <path fill="none" stroke="#BABABA" d="M175.848 205.361C190.203 202.423 201 189.723 201 174.5V83l-10 .116"/>
          <path fill="#EFEFEF" stroke="#BABABA" d="M172.714 198.102C183.511 193.106 191 182.179 191 169.5V78l-21 .084"/>
          <path fill="none" stroke="#EE5325" d="M34 79V46l25 32.588V46M90 47H70v31.586l19.775.502M84 63H71M98.545 46l8.146 32.586 8.147-16.293 8.146 16.293L131.131 46M141.037 71.458a8.146 8.146 0 1 0 16.293 0 8.147 8.147 0 0 0-8.146-8.146 8.147 8.147 0 1 1 8.146-8.146"/>
          <path fill="none" stroke="#53AEE1" d="M34 93h123v57H34z"/>
          <path fill="none" stroke="#F9B618" d="M105 167h52v40h-52z"/>
          <g fill="none" stroke="#BABABA">
            <path d="M90 167H34M90 180H53M90 194H72M90 207H46"/>
          </g>
          <path fill="none" stroke="#BABABA" d="M201 221H54.5c-17.396 0-31.501-14.103-31.501-31.5L23 165V35h147v128l-.064 26.5c0 17.397 14.167 31.5 31.563 31.5C218.896 221 233 206.897 233 189.5V98l-10 .25"/>
        </g>
      </g>
    </switch>
  </svg>
);

export default NewsLogo;

