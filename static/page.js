const fUtil = require("../misc/file");
const stuff = require("./info");
const http = require("http");

function toAttrString(table) {
	return typeof table == "object"
		? Object.keys(table)
				.filter((key) => table[key] !== null)
				.map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(table[key])}`)
				.join("&")
		: table.replace(/"/g, '\\"');
}
function toParamString(table) {
	return Object.keys(table)
		.map((key) => `<param name="${key}" value="${toAttrString(table[key])}">`)
		.join(" ");
}
function toObjectString(attrs, params) {
	return `<object ${Object.keys(attrs)
		.map((key) => `${key}="${attrs[key].replace(/"/g, '\\"')}"`)
		.join(" ")}>${toParamString(params)}</object>`;
}

/**
 * @param {http.IncomingMessage} req
 * @param {http.ServerResponse} res
 * @param {import("url").UrlWithParsedQuery} url
 * @returns {boolean}
 */
module.exports = function (req, res, url) {
	if (req.method != "GET") return;
	const query = url.query;
        var swfFolder = process.env.SWF_URL;
	var stFolder = process.env.STORE_URL;
	var ctFolder = process.env.CLIENT_URL;
	var attrs, params, title;
	switch (url.pathname) {
		case "/cc": {
			title = 'Character Creator';
			attrs = {
				data: swfFolder + '/cc.swf', // data: 'cc.swf',
				type: 'application/x-shockwave-flash', 
				id: 'char_creator',
			};
			params = {
				flashvars: {
					apiserver: "/",
					storePath: stFolder + "/<store>",
					clientThemePath: ctFolder + "/<client_theme>",
					original_asset_id: query["id"] || null,
					themeId: "family",
					ut: 60,
					bs: "adam",
					appCode: "go",
					page: "",
					siteId: "go",
					m_mode: "school",
					isLogin: "Y",
					isEmbed: 1,
					ctc: "go",
					tlang: "en_US",
                    nextUrl: "/cc_browser",
				},
				allowScriptAccess: "always",
				movie: swfFolder + "/cc.swf", // 'http://localhost/cc.swf'
			};
			break;
		}

		case "/go_full": {
			let presave =
				query.movieId && query.movieId.startsWith("m")
					? query.movieId
					: `m-${fUtil[query.noAutosave ? "getNextFileId" : "fillNextFileId"]("movie-", ".xml")}`;
			title = "Video Editor";
			attrs = {
				data: swfFolder + "/go_full.swf",
				type: "application/x-shockwave-flash",
				id: "video_maker",
			};
			params = {
				flashvars: {
					apiserver: "/",
					storePath: stFolder + "/<store>",
					isEmbed: 1,
					ctc: "go",
					ut: 60,
					bs: "default",
					appCode: "go",
					page: "",
					siteId: "go",
					lid: 13,
					isLogin: "Y",
					retut: 0,
					clientThemePath: ctFolder + "/<client_theme>",
					themeId: "custom",
					tray: "retro",
					tlang: "en_US",
					presaveId: presave,
					goteam_draft_only: 1,
					isWide: 0,
					collab: 0,
					nextUrl: "../pages/html/list.html",
					noSkipTutorial: 1,
				},
				allowScriptAccess: "always",
				allowFullScreen: "true",
			};
			break;
		}

		case "/player": {
			title = "Video Player";
			attrs = {
				data: swfFolder + "/player.swf",
				type: "application/x-shockwave-flash",
				id: "Player",
				width: "100%",
				height: "100%",
			        bgcolor: "#000000",
				scale: "exactfit",
				allowScriptAccess: "always",
				allowFullScreen: "true",
				wmode: "opaque",
			};
			params = {
				flashvars: {
					movieOwner: "African Vulture\u2122",
					movieOwnerId: "0uWOI2JiCdHU",
					movieId: "",
					movieLid: "0",
					movieTitle: "Caillou+Opens+up+YouTube+Account+while+Grounded",
					movieDesc: "Caillou+was+opening+up+a+YouTube+account+while+he+is+in+his+room+as+he+is+not+supposed+to+while+grounded.",
					userId: "",
					username: "",
					uemail: "",
					ut: "-1",
					numContact: "",
					apiserver: "/",
					duration: "92",
					playcount: 1,
					thumbnailURL: `/movie_thumbs/${params.flashvars.movieId}.png`,
					copyable: "0",
					isPublished: "1",
					ctc: "go",
					tlang: "en_US",
					is_private_shared: "0",
					autostart: "1",
					appCode: "go",
					is_slideshow: "0",
					originalId: "0zEt_fo4L-5k",
					is_emessage: "0",
					storePath: stFolder + "/<store>",
					clientThemePath: ctFolder + "/<client_theme>",
					animationPath: swfFolder + "/",
					isEmbed: "0",
					refuser: null,
					utm_source: null,
					uid: null,
					isTemplate: "0",
					showButtons: "1",
					chain_mids: "",
					averageRating: 5,
					ratingCount: "28",
					fb_app_url: "/",
					ad: 1,
					endStyle: 0,
					isWide: 0,
					pwm: 0,
					s3base: "/movie_thumbs/",
					initcb: "playerLoaded",
					showshare: false,
				},
				movie: swfFolder + "/player.swf",
			};
			break;
		}

		case "/recordWindow": {
			title = "Record Window";
			attrs = {
				data: swfFolder + "/player.swf",
				type: "application/x-shockwave-flash",
				id: "Player",
				width: "100%",
				height: "100%",
			        bgcolor: "#000000",
				scale: "exactfit",
				allowScriptAccess: "always",
				allowFullScreen: "true",
				wmode: "opaque",
				quality: "medium",
			};
			params = {
				flashvars: {
					movieOwner: "African Vulture\u2122",
					movieOwnerId: "0uWOI2JiCdHU",
					movieId: "",
					movieLid: "0",
					movieTitle: "Caillou+Opens+up+YouTube+Account+while+Grounded",
					movieDesc: "Caillou+was+opening+up+a+YouTube+account+while+he+is+in+his+room+as+he+is+not+supposed+to+while+grounded.",
					userId: "",
					username: "",
					uemail: "",
					ut: "-1",
					numContact: "",
					apiserver: "/",
					duration: "92",
					playcount: 1,
					thumbnailURL: `/movie_thumbs/${params.flashvars.movieId}.png`,
					copyable: "0",
					isPublished: "1",
					ctc: "go",
					tlang: "en_US",
					is_private_shared: "0",
					autostart: "0",
					appCode: "go",
					is_slideshow: "0",
					originalId: "0zEt_fo4L-5k",
					is_emessage: "0",
					storePath: stFolder + "/<store>",
					clientThemePath: ctFolder + "/<client_theme>",
					animationPath: swfFolder + "/",
					isEmbed: "0",
					refuser: null,
					utm_source: null,
					uid: null,
					isTemplate: "0",
					showButtons: "1",
					chain_mids: "",
					averageRating: 5,
					ratingCount: "28",
					fb_app_url: "/",
					ad: 1,
					endStyle: 0,
					isWide: 0,
					pwm: 0,
					s3base: "/movie_thumbs/",
					initcb: "playerLoaded",
					showshare: false,
				},
				movie: swfFolder + "/player.swf",
			};
			break;
		}

		default:
			return;
	}
	res.setHeader("Content-Type", "text/html; charset=UTF-8");
	Object.assign(params.flashvars, query);
	res.end(`
	<head>
		<script>
			document.title='${title}',flashvars=${JSON.stringify(params.flashvars)}
		</script>
		<script src="/pages/js/stuff.js"></script>
		<script>
			if(window.location.pathname == '/player' || window.location.pathname == '/go_full' || window.location.pathname == '/recordWindow' || window.location.pathname == '/go_full/tutorial') {
				function hideHeader() {
					document.getElementById("header").remove();
				}
			}
		</script>
		<link rel="stylesheet" type="text/css" href="/pages/css/modern-normalize.css">
		<link rel="stylesheet" type="text/css" href="/pages/css/global.css">
		<link rel="stylesheet" type="text/css" href="/pages/css/swf.css">
	</head>
	
	<header id="header">
		<a href="/">
			<h1 style="margin:0"><img id="logo" src="/pages/img/list_logo.svg" alt="Wrapper: Offline"/></h1>
		</a>
		<nav id="headbuttons">
			<div class="dropdown_contain button_small">
				<div class="dropdown_button upload_button">UPLOAD</div>
				<nav class="dropdown_menu">
					<a onclick="document.getElementById('file').click()">Movie</a>
					<a onclick="document.getElementById('file2').click()">Character</a>
				</nav>
			</div>
			<a href="/pages/html/create.html" class="button_big">CREATE</a>
		</nav>
	</header>
	
	<body onload="hideHeader()">
		<main>
			${toObjectString(attrs, params)}
		</main>

		<form enctype='multipart/form-data' action='/upload_movie' method='post'>
			<input id='file' type="file" onchange="this.form.submit()" name='import' />
		</form>

		<form enctype='multipart/form-data' action='/upload_character' method='post'>
			<input id='file2' type="file" onchange="this.form.submit()" name='import' />
		</form>
	</body>${stuff.pages[url.pathname] || ''}`)
	return true;
};
