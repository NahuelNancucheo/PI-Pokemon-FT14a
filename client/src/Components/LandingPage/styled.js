import styled from 'styled-components';

const LandingStyle = styled.div`
        background: #F4CC5F;
        backgrouns: linear-gradient(
            0deg,
            rgba(0,0,0,1) 0%,
            rgba(254, 218, 0,1) 71%
        );
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Poppins', sans-serif;
        }
        section {
            padding: 100px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            min-height: 100vh;
            .bg {
                position: absolute;
                top: 0;
                right: 0;
                height: 100%; 
            }
        }
        .content {
            position: relative;
			max-width: 650px;
			z-index: 1;
            h2 {
                color:#434141;
				font-size: 3em;
				font-weight: 600;
				line-height: 1.0em;
            }
            p{
                color: #434141;
				font-size: 1.1em;
				margin: 20px 0 10px;
            }
            .link {
                color: #ffffff;
				background: #D54F4C;
				font-size: 1em;
				margin: 20px 0;
				font-weight: 700;
				padding: 15px 40px;
				display: inline-block;
				text-decoration: none;
            }
        }
        .copyRight {
			position: absolute;
			bottom: 10px;
			color: #434141;
			font-size: 1.0em;
			margin: 20px 0 10px;
		}
        @media (max-width: 768px) {
            section {
                padding: 100px 40px;
                .content h2 {
                    font-size: 2.5em;
                }
                .bg {
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    opacity: 0.5;
                }
            }
        }
`;
export default LandingStyle;

/*
RED: #D54F4C
YELLOW: #F4CC5F
BLUE: #79B1C8
GRAY: #434141
*/