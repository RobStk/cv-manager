/**
 * These are higher priority classes that break cascading. 
 * Use them wisely.
 */
import configs from "../configs";

export default function getSpacing() {
	const spacer = configs.spaces.main;
	const xxl = `calc(${spacer}*1.75) !important;`;
	const xl = `calc(${spacer}*1.5) !important;`;
	const lg = `calc(${spacer}*1.25) !important;`;
	const md = `calc(${spacer}*1) !important;`;
	const sm = `calc(${spacer}*0.75) !important;`;
	const xs = `calc(${spacer}*0.5) !important;`;
	const xxs = `calc(${spacer}*0.25) !important;`;

	return `
		.p-xxl {
			padding: ${xxl}
		}
		.p-xl {
			padding: ${xl};
		}
		.p-lg {
			padding: ${lg};
		}
		.p-md {
			padding: ${md};
		}
		.p-sm {
			padding: ${sm};
		}
		.p-xs {
			padding: ${xs};
		}
		.p-xxs {
			padding: ${xxs};
		}
		.p-0 {
			padding: 0;
		}

		.px-xxl {
			padding-left: ${xxl};
			padding-right: ${xxl};
		}
		.px-xl {
			padding-left: ${xl};
			padding-right: ${xl};
		}
		.px-lg {
			padding-left: ${lg};
			padding-right: ${lg};
		}
		.px-md {
			padding-left: ${md};
			padding-right: ${md};
		}
		.px-sm {
			padding-left: ${sm};
			padding-right: ${sm};
		}
		.px-xs {
			padding-left: ${xs};
			padding-right: ${xs};
		}
		.px-xxs {
			padding-left: ${xxs};
			padding-right: ${xxs};
		}
		.px-0 {
			padding-left: 0;
			padding-right: 0;
		}

		.py-xxl {
			padding-top: ${xxl};
			padding-bottom: ${xxl};
		}
		.py-xl {
			padding-top: ${xl};
			padding-bottom: ${xl};
		}
		.py-lg {
			padding-top: ${lg};
			padding-bottom: ${lg};
		}
		.py-md {
			padding-top: ${md};
			padding-bottom: ${md};
		}
		.py-sm {
			padding-top: ${sm};
			padding-bottom: ${sm};
		}
		.py-xs {
			padding-top: ${xs};
			padding-bottom: ${xs};
		}
		.py-xxs {
			padding-top: ${xxs};
			padding-bottom: ${xxs};
		}
		.py-0 {
			padding-top: 0;
			padding-bottom: 0;
		}

		.pt-xxl {
			padding-top: ${xxl};
		}
		.pt-xl {
			padding-top: ${xl};
		}
		.pt-lg {
			padding-top: ${lg};
		}
		.pt-md {
			padding-top: ${md};
		}
		.pt-sm {
			padding-top: ${sm};
		}
		.pt-xs {
			padding-top: ${xs};
		}
		.pt-xxs {
			padding-top: ${xxs};
		}
		.pt-0 {
			padding-top: 0;
		}

		.pb-xxl {
			padding-bottom: ${xxl};
		}
		.pb-xl {
			padding-bottom: ${xl};
		}
		.pb-lg {
			padding-bottom: ${lg};
		}
		.pb-md {
			padding-bottom: ${md};
		}
		.pb-sm {
			padding-bottom: ${sm};
		}
		.pb-xs {
			padding-bottom: ${xs};
		}
		.pb-xxs {
			padding-bottom: ${xxs};
		}
		.pb-0 {
			padding-bottom: 0;
		}

		.pl-xxl {
			padding-left: ${xxl};
		}
		.pl-xl {
			padding-left: ${xl};
		}
		.pl-lg {
			padding-left: ${lg};
		}
		.pl-md {
			padding-left: ${md};
		}
		.pl-sm {
			padding-left: ${sm};
		}
		.pl-xs {
			padding-left: ${xs};
		}
		.pl-xxs {
			padding-left: ${xxs};
		}
		.pl-0 {
			padding-left: 0;
		}

		.pr-xxl {
			padding-right: ${xxl};
		}
		.pr-xl {
			padding-right: ${xl};
		}
		.pr-lg {
			padding-right: ${lg};
		}
		.pr-md {
			padding-right: ${md};
		}
		.pr-sm {
			padding-right: ${sm};
		}
		.pr-xs {
			padding-right: ${xs};
		}
		.pr-xxs {
			padding-right: ${xxs};
		}
		.pr-0 {
			padding-right: 0;
		}

		.m-xxl {
			margin: ${xxl};
		}
		.m-xl {
			margin: ${xl};
		}
		.m-lg {
			margin: ${lg};
		}
		.m-md {
			margin: ${md};
		}
		.m-sm {
			margin: ${sm};
		}
		.m-xs {
			margin: ${xs};
		}
		.m-xxs {
			margin: ${xxs};
		}
		.m-0 {
			margin: 0;
		}

		.mx-xxl {
			margin-left: ${xxl};
			margin-right: ${xxl};
		}
		.mx-xl {
			margin-left: ${xl};
			margin-right: ${xl};
		}
		.mx-lg {
			margin-left: ${lg};
			margin-right: ${lg};
		}
		.mx-md {
			margin-left: ${md};
			margin-right: ${md};
		}
		.mx-sm {
			margin-left: ${sm};
			margin-right: ${sm};
		}
		.mx-xs {
			margin-left: ${xs};
			margin-right: ${xs};
		}
		.mx-xxs {
			margin-left: ${xxs};
			margin-right: ${xxs};
		}
		.mx-0 {
			margin-left: 0;
			margin-right: 0;
		}

		.my-xxl {
			margin-top: ${xxl};
			margin-bottom: ${xxl};
		}
		.my-xl {
			margin-top: ${xl};
			margin-bottom: ${xl};
		}
		.my-lg {
			margin-top: ${lg};
			margin-bottom: ${lg};
		}
		.my-md {
			margin-top: ${md};
			margin-bottom: ${md};
		}
		.my-sm {
			margin-top: ${sm};
			margin-bottom: ${sm};
		}
		.my-xs {
			margin-top: ${xs};
			margin-bottom: ${xs};
		}
		.my-xxs {
			margin-top: ${xxs};
			margin-bottom: ${xxs};
		}
		.my-0 {
			margin-top: 0;
			margin-bottom: 0;
		}

		.mt-xxl {
			margin-top: ${xxl};
		}
		.mt-xl {
			margin-top: ${xl};
		}
		.mt-lg {
			margin-top: ${lg};
		}
		.mt-md {
			margin-top: ${md};
		}
		.mt-sm {
			margin-top: ${sm};
		}
		.mt-xs {
			margin-top: ${xs};
		}
		.mt-xxs {
			margin-top: ${xxs};
		}
		.mt-0 {
			margin-top: 0;
		}

		.mb-xxl {
			margin-bottom: ${xxl};
		}
		.mb-xl {
			margin-bottom: ${xl};
		}
		.mb-lg {
			margin-bottom: ${lg};
		}
		.mb-md {
			margin-bottom: ${md};
		}
		.mb-sm {
			margin-bottom: ${sm};
		}
		.mb-xs {
			margin-bottom: ${xs};
		}
		.mb-xxs {
			margin-bottom: ${xxs};
		}
		.mb-0 {
			margin-bottom: 0;
		}

		.ml-xxl {
			margin-left: ${xxl};
		}
		.ml-xl {
			margin-left: ${xl};
		}
		.ml-lg {
			margin-left: ${lg};
		}
		.ml-md {
			margin-left: ${md};
		}
		.ml-sm {
			margin-left: ${sm};
		}
		.ml-xs {
			margin-left: ${xs};
		}
		.ml-xxs {
			margin-left: ${xxs};
		}
		.ml-0 {
			margin-left: 0;
		}

		.mr-xxl {
			margin-right: ${xxl};
		}
		.mr-xl {
			margin-right: ${xl};
		}
		.mr-lg {
			margin-right: ${lg};
		}
		.mr-md {
			margin-right: ${md};
		}
		.mr-sm {
			margin-right: ${sm};
		}
		.mr-xs {
			margin-right: ${xs};
		}
		.mr-xxs {
			margin-right: ${xxs};
		}
		.mr-0 {
			margin-right: 0;
		}
	`;
}