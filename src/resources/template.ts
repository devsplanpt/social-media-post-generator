import { JSDOM } from 'jsdom';
import { ImageConfig, ThemeConfig } from '../types';

export const generateImage = (theme: ThemeConfig, image: ImageConfig) => {
	const title = image?.title || '';
	const caption = image?.author || image?.caption || '';

	const imgUrl =
		image.author != null ? `./${image.author}.svg` : image.imageUrl;

	return `<svg data-color="${theme.color}" data-bg="${
		theme.bg
	}" width="1080" height="1080" viewBox="0 0 1080 1080" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g clip-path="url(#clip0_53_92)">
<rect width="1080" height="1080" fill="${theme.bg}"/>
<g opacity="0.15" clip-path="url(#clip1_53_92)">
<path d="M0 836L5.28042 844.159C10.4843 852.012 20.6625 868.787 31.3764 905.159C42.0138 941.987 52.8042 998.412 62.7528 994.6C73.4667 990.787 84.1806 925.213 94.1292 909.2C104.92 893.188 115.557 925.212 126.271 953.959C136.449 982.4 146.933 1006.8 157.647 1019C167.902 1031.2 178.31 1031.2 189.024 1027.16C199.431 1022.81 209.686 1015.19 220.4 1014.96C230.884 1015.19 241.063 1022.81 251.776 1002.76C262.414 982.4 273.204 933.6 283.153 933.6C293.867 933.6 304.581 982.4 314.529 990.559C325.32 998.412 335.957 966.387 346.671 937.641C356.849 909.2 367.333 884.8 378.047 905.159C388.302 925.212 398.71 990.788 409.424 1023.04C419.831 1055.6 430.086 1055.6 440.8 1019C451.284 982.4 461.463 909.2 472.176 901.041C482.814 893.188 493.604 949.613 503.553 986.441C514.267 1022.81 524.981 1039.59 534.929 1014.96C545.72 990.787 556.357 925.212 567.071 917.359C577.249 909.2 587.733 958 598.447 994.6C608.702 1031.2 619.11 1055.6 629.824 1047.44C640.231 1039.59 650.486 998.412 661.2 994.6C671.684 990.787 681.863 1022.81 692.576 1010.84C703.214 998.413 714.004 941.987 723.953 941.759C734.667 941.987 745.381 998.412 755.329 1006.8C766.12 1015.19 776.757 974.012 787.471 974.241C797.649 974.012 808.133 1015.19 818.847 1006.8C829.102 998.412 839.51 941.987 850.224 921.4C860.631 900.812 870.886 917.588 881.6 945.8C892.084 974.012 902.263 1015.19 912.976 1035.24C923.614 1055.6 934.404 1055.6 944.353 1043.4C955.067 1031.2 965.781 1006.8 975.729 990.559C986.52 974.012 997.157 966.387 1007.87 974.241C1018.05 982.4 1028.53 1006.8 1039.25 1006.8C1049.5 1006.8 1059.91 982.4 1070.62 990.559C1081.03 998.412 1091.29 1039.59 1096.64 1059.64L1102 1080H1096.72C1091.52 1080 1081.34 1080 1070.62 1080C1059.99 1080 1049.2 1080 1039.25 1080C1028.53 1080 1017.82 1080 1007.87 1080C997.08 1080 986.443 1080 975.729 1080C965.551 1080 955.067 1080 944.353 1080C934.098 1080 923.69 1080 912.976 1080C902.569 1080 892.314 1080 881.6 1080C871.116 1080 860.938 1080 850.224 1080C839.586 1080 828.796 1080 818.847 1080C808.133 1080 797.419 1080 787.471 1080C776.68 1080 766.043 1080 755.329 1080C745.151 1080 734.667 1080 723.953 1080C713.698 1080 703.29 1080 692.576 1080C682.169 1080 671.914 1080 661.2 1080C650.716 1080 640.538 1080 629.824 1080C619.186 1080 608.396 1080 598.447 1080C587.733 1080 577.019 1080 567.071 1080C556.28 1080 545.643 1080 534.929 1080C524.751 1080 514.267 1080 503.553 1080C493.298 1080 482.89 1080 472.176 1080C461.769 1080 451.514 1080 440.8 1080C430.316 1080 420.138 1080 409.424 1080C398.786 1080 387.996 1080 378.047 1080C367.333 1080 356.619 1080 346.671 1080C335.88 1080 325.243 1080 314.529 1080C304.351 1080 293.867 1080 283.153 1080C272.898 1080 262.49 1080 251.776 1080C241.369 1080 231.114 1080 220.4 1080C209.916 1080 199.738 1080 189.024 1080C178.386 1080 167.596 1080 157.647 1080C146.933 1080 136.219 1080 126.271 1080C115.48 1080 104.843 1080 94.1292 1080C83.951 1080 73.4667 1080 62.7528 1080C52.4981 1080 42.0903 1080 31.3764 1080C20.9686 1080 10.7139 1080 5.35694 1080H0V836Z" fill="${
		theme.color
	}"/>
</g>
<text opacity="0.7" fill="${
		theme.color
	}" xml:space="preserve" style="white-space: pre" font-family="Inter" font-size="32" letter-spacing="0px"><tspan x="120" y="951.636">#devsplanpodcast</tspan></text>
<text fill="${
		theme.color
	}" xml:space="preserve" style="white-space: pre" font-family="Inter" font-size="58" font-weight="bold" letter-spacing="0px" data-testid="title">${title}</text>
<text opacity="0.7" fill="${
		theme.color
	}" xml:space="preserve" style="white-space: pre" font-family="Inter" font-size="28" letter-spacing="0px" data-testid="counter"></text>
<text opacity="0.7" fill="${
		theme.color
	}" xml:space="preserve" style="white-space: pre" font-family="Inter" font-size="28" letter-spacing="3px" data-testid="caption">${caption}</text>
<text fill="${
		theme.color
	}" xml:space="preserve" style="white-space: pre" font-family="Inter" font-size="28" letter-spacing="3px"><tspan x="807.66" y="150.182">PODCAST</tspan></text>
<path d="M148.398 120H129.906C125.614 120 122.311 123.634 122.311 127.929C122.311 132.223 125.614 135.527 129.906 135.527H132.218L120 157H123.632L128.916 147.75H148.398C155.993 147.75 162.266 141.473 162.266 133.875C162.266 126.277 156.323 120 148.398 120ZM150.049 140.152C150.049 135.857 146.417 132.223 142.124 132.223H140.473L138.492 135.527H142.454C145.096 135.527 147.077 137.509 147.077 140.152C147.077 142.795 144.765 144.446 142.454 144.446H130.897L137.831 132.223H129.906C127.265 132.223 125.283 130.241 125.283 127.598C125.283 124.955 127.595 123.304 129.906 123.304H148.398C154.341 123.304 158.964 127.929 158.964 133.875C158.964 139.821 154.341 144.446 148.398 144.446C149.719 143.125 150.049 141.804 150.049 140.152Z" fill="${
		theme.color
	}"/>
<path d="M138.492 125.286L135.52 130.241H139.152L142.124 125.286H138.492Z" fill="${
		theme.color
	}"/>
<text fill="${
		theme.color
	}" xml:space="preserve" style="white-space: pre" font-family="Plus Jakarta Sans" font-size="40" font-weight="800" letter-spacing="0px"><tspan x="170.266" y="152.32">devsplan</tspan></text>
<rect x="651" y="585" width="502" height="502" fill="url(#pattern0)"/>
</g>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_53_92" transform="scale(0.00250627)"/>
</pattern>
<clipPath id="clip0_53_92">
<rect width="1080" height="1080" fill="white"/>
</clipPath>
<clipPath id="clip1_53_92">
<rect width="1102" height="244" fill="white" transform="translate(0 836)"/>
</clipPath>
${
	!!imgUrl
		? `<image id="image0_53_92" width="399" height="399" src="${imgUrl}" data-testid="image" />`
		: ''
}
</defs>
</svg>
`;
};
