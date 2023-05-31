import styled, { keyframes } from 'styled-components';

const Animaition = () => {
	return (
		<Container>
			<FlowBox>
				<FlowWrap>
					<Flow>
						<p>HTML</p>
						<p>CSS</p>
						<p>JQUERY</p>
						<span>JAVASCRIPT</span>
						<p>HTML</p>
						<p>CSS</p>
						<p>JQUERY</p>
						<span>JAVASCRIPT</span>
						<p>HTML</p>
						<p>CSS</p>
						<p>JQUERY</p>
						<span>JAVASCRIPT</span>
						<p>HTML</p>
						<p>CSS</p>
						<p>JQUERY</p>
						<span>JAVASCRIPT</span>
						<p>HTML</p>
						<p>CSS</p>
						<p>JQUERY</p>
						<span>JAVASCRIPT</span>
						<p>HTML</p>
						<p>CSS</p>
						<p>JQUERY</p>
						<span>JAVASCRIPT</span>
						<p>HTML</p>
						<p>CSS</p>
						<p>JQUERY</p>
						<span>JAVASCRIPT</span>
						<p>HTML</p>
						<p>CSS</p>
						<p>JQUERY</p>
						<span>JAVASCRIPT</span>
					</Flow>
					<Flow>
						<p>REACT</p>
						<span>GITHUB</span>
						<p>FIGMA</p>
						<p>REACT</p>
						<span>GITHUB</span>
						<p>FIGMA</p>
						<p>REACT</p>
						<span>GITHUB</span>
						<p>FIGMA</p>
						<p>REACT</p>
						<span>GITHUB</span>
						<p>FIGMA</p>
						<p>REACT</p>
						<span>GITHUB</span>
						<p>FIGMA</p>
						<p>REACT</p>
						<span>GITHUB</span>
					</Flow>
					<Flow>
						<span>EMAIL</span>
						<p>AARREUM0307@GMAIL.COM</p>
						<span>PHONENUMEBER</span>
						<p>010.2967.5037</p>
						<span>EMAIL</span>
						<p>AARREUM0307@GMAIL.COM</p>
						<span>PHONENUMEBER</span>
						<p>010.2967.5037</p>
						<span>EMAIL</span>
						<p>AARREUM0307@GMAIL.COM</p>
						<span>PHONENUMEBER</span>
						<p>010.2967.5037</p>
						<span>EMAIL</span>
						<p>AARREUM0307@GMAIL.COM</p>
						<span>PHONENUMEBER</span>
						<p>010.2967.5037</p>
						<span>EMAIL</span>
						<p>AARREUM0307@GMAIL.COM</p>
						<span>PHONENUMEBER</span>
						<p>010.2967.5037</p>
					</Flow>
				</FlowWrap>
			</FlowBox>
		</Container>
	);
};
export default Animaition;

const Container = styled.div`
	position: relative;

	background: ${({ theme }) => theme.colors.black_color};
	margin-bottom: 300px;
	@media ${({ theme }) => theme.device.laptop} {
		/* max-width: 75%;
		margin: 0 auto; */
	}
	@media ${({ theme }) => theme.device.tablet} {
	}
	@media ${({ theme }) => theme.device.mobile} {
	}
	@media screen and(max-width:  1400px) {
		width: 100%;
		height: 500px;
		top: 0;
		left: 0;
	}
`;
const flowing = keyframes`
0% {
  transform: translate3d(0, 0, 0);
}
100% {
  transform: translate3d(-50%, 0, 0);
}
`;

const FlowBox = styled.div`
	width: 100%;
	height: 100%;
	margin: 0 auto;
	overflow: hidden;
`;

const FlowWrap = styled.div`
	display: flex;
	flex-direction: column;
	top: 0;
	left: 0;
	align-items: center;
	width: 100%;
	height: 100%;
	white-space: nowrap;
`;

const Flow = styled.div`
	font-size: 6rem;
	animation: ${flowing} 30s linear infinite;
	p {
		color: ${({ theme }) => theme.colors.black_color};
		text-shadow: -1px 0 #fff, 0 1px #fff, 1px 0 #fff, 0 -1px #fff;
		display: inline-block;
		font-weight: ${({ theme }) => theme.fonts.weightExtra};
		padding-right: 30px;
	}
	span {
		color: ${({ theme }) => theme.colors.white_color};
		text-shadow: -2px 0 #fff, 0 px #fff, 2px 0 #fff, 0 -1px #fff;
		display: inline-block;
		font-weight: ${({ theme }) => theme.fonts.weightExtra};
		padding-right: 30px;
	}
`;
