"use strict";
if (typeof browser == "undefined" && typeof chrome !== "undefined") var browser = chrome;

function sauron(selector: string | string[], callback: Function) {
	let selector_list: string[] = [];

	if (typeof callback !== "function") callback = () => {};
	if (typeof selector === "string") selector_list = [selector];
	else if (Array.isArray(selector)) selector_list = selector;
	else return false;

	let list: { selector: string[]; callback: Function }[] = [];
	list.push({
		selector: selector_list,
		callback: callback,
	});

	const observer_function = () => {
		for (let o in list) {
			let cnt = 0;
			for (let s of list[o].selector) {
				if (document.querySelectorAll(s).length) {
					cnt++;
				}
			}
			if (cnt == list[o].selector.length) {
				list[o].callback();
				list.splice(Number(o), 1);
				break;
			}
		}
	};
	const observer = new MutationObserver(observer_function);
	observer_function();
	observer.observe(document, {
		childList: true,
		subtree: true,
	});
}

function observe(
	node: Node | null,
	callback: Function,
	options?: {
		childList: boolean;
		attributes: boolean;
		characterData: boolean;
		subtree: boolean;
	}
) {
	if (!node) return;
	var observer = new MutationObserver(() => {
		callback();
	});
	callback();
	if (typeof options === "undefined")
		options = {
			childList: true,
			attributes: false,
			characterData: false,
			subtree: true,
		};
	observer.observe(node, options);
}

function delegate(targetNode: Node | null, eventList: string, handler: (event: Event) => unknown, selector?: string): void {
	if (!targetNode) return;
	if (typeof selector === "undefined") {
		eventList.split(" ").forEach((eventName) => {
			targetNode.addEventListener(eventName, (event) => { handler.call(event.target, event); }, false);
		});
	} else {
		eventList.split(" ").forEach((event) => {
			targetNode.addEventListener(
				event,
				(event) => {
					let currentNode = event.target as HTMLElement;
					while (currentNode && currentNode !== targetNode) {
						if (currentNode.matches(selector)) {
							handler.call(currentNode, event);
						}
						if (currentNode.parentNode) currentNode = currentNode.parentNode as HTMLElement;
					}
				},
				false
			);
		});
	}
}

function docReady(callback: Function) {

    function completed() {
        document.removeEventListener( "DOMContentLoaded", completed, false )
        window.removeEventListener( "load", completed, false )
        callback()
    }

    //Events.on(document, 'DOMContentLoaded', completed)

    if ( document.readyState === "complete" ) {
        // Handle it asynchronously to allow scripts the opportunity to delay ready
        setTimeout( callback )

    } else {

        // Use the handy event callback
        document.addEventListener( "DOMContentLoaded", completed, false );

        // A fallback to window.onload, that will always work
        window.addEventListener( "load", completed, false );
    }
}

function injectScript(file: string, node: string) {
	var th = document.getElementsByTagName(node)[0];
	var s = document.createElement("script");
	s.setAttribute("type", "text/javascript");
	s.setAttribute("src", file);
	th.appendChild(s);
}

function isUrlAbsolute(url: string) {
	return url.indexOf("//") === 0 ? true : url.indexOf("://") === -1 ? false : url.indexOf(".") === -1 ? false : url.indexOf("/") === -1 ? false : url.indexOf(":") > url.indexOf("/") ? false : url.indexOf("://") < url.indexOf(".") ? true : false;
}

const DateHelper = {
	/**
	 * format
	 * @param  {Date} target date object
	 *         {String} pattern
	 *  Y : A full numeric representation of a year, 4 digits
	 *  y : A two digit representation of a year
	 *  m : Numeric representation of a month, with leading zeros
	 *  n : Numeric representation of a month, without leading zeros
	 *  F : A full textual representation of a month, such as January or March
	 *  M : A short textual representation of a month, three letters
	 *  O : Japanese old month name
	 *  d : Day of the month, 2 digits with leading zeros
	 *  j : Day of the month without leading zeros
	 *  w : Numeric representation of the day of the week
	 *  l : A full textual representation of the day of the week
	 *  D : A textual representation of a day, three letters
	 *  N : ISO-8601 numeric representation of the day of the week
	 *  J : A Japanese textual representation of the day of the week
	 *  g : 12-hour format of an hour without leading zeros
	 *  G : 24-hour format of an hour without leading zeros
	 *  h : 12-hour format of an hour with leading zeros
	 *  H : 24-hour format of an hour with leading zeros
	 *  i : Minutes with leading zeros
	 *  s : Seconds, with leading zeros
	 *  a : Lowercase Ante meridiem and Post meridiem (am or pm)
	 *  A : Uppercase Ante meridiem and Post meridiem （AM or PM）
	 *  S : English ordinal suffix for the day of the month, 2 characters
	 *  z : The day of the year (starting from 0)
	 *  t : Number of days in the given month
	 *  L : Whether it's a leap year
	 *  Escape character is #. Example: DateFormatter.format(new Date(), "#Y#m#d #i#s Ymd");
	 * @return {String} formatted date
	 */
	format: function(d: Date, pattern: string) {
		const dYear = d.getFullYear();
		const dMonth = d.getMonth();
		const dDate = d.getDate();
		const dDay = d.getDay();
		const dHours = d.getHours();
		const dMinutes = d.getMinutes();
		const dSeconds = d.getSeconds();
		let res = "";
		for (let i = 0, len = pattern.length; i < len; i++) {
			const c = pattern.charAt(i);
			switch (c) {
				case "#":
					if (i == len - 1) break;
					res += pattern.charAt(++i);
					break;
				case "Y":
					res += dYear;
					break;
				case "y":
					res += dYear.toString().substr(2, 2);
					break;
				case "m":
					res += (dMonth + 1).toString().padStart(2, "0");
					break;
				case "n":
					res += dMonth + 1;
					break;
				case "d":
					res += dDate.toString().padStart(2, "0");
					break;
				case "j":
					res += dDate;
					break;
				case "w":
					res += dDay;
					break;
				case "N":
					res += this.isoDay(dDay);
					break;
				case "l":
					res += this.weekFullEn[dDay];
					break;
				case "D":
					res += this.weekFullEn[dDay].substr(0, 3);
					break;
				case "J":
					res += this.weekKr[dDay];
					break;
				case "K":
					res += this.weekKr[dDay];
					break;
				case "F":
					res += this.monthFullEn[dMonth];
					break;
				case "M":
					res += this.monthFullEn[dMonth].substr(0, 3);
					break;
				case "a":
					res += this.ampm(dHours);
					break;
				case "A":
					res += this.ampm(dHours).toUpperCase();
					break;
				case "H":
					res += dHours.toString().padStart(2, "0");
					break;
				case "h":
					res += this.from24to12(dHours).toString().padStart(2, "0");
					break;
				case "g":
					res += this.from24to12(dHours);
					break;
				case "G":
					res += dHours;
					break;
				case "i":
					res += dMinutes.toString().padStart(2, "0");
					break;
				case "s":
					res += dSeconds.toString().padStart(2, "0");
					break;
				case "t":
					res += this.lastDayOfMonth(d);
					break;
				case "L":
					res += this.isLeapYear(dYear);
					break;
				case "z":
					res += this.dateCount(dYear, dMonth, dDate);
					break;
				case "S":
					res += this.dateSuffix[dDate - 1];
					break;
				default:
					res += c;
					break;
			}
		}
		return res;
	},

	weekFullEn: [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	],

	weekKr: ["일", "월", "화", "수", "목", "금", "토"],

	monthFullEn: [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	],

	dateSuffix: [
		"st",
		"nd",
		"rd",
		"th",
		"th",
		"th",
		"th",
		"th",
		"th",
		"th",
		"th",
		"th",
		"th",
		"th",
		"th",
		"th",
		"th",
		"th",
		"th",
		"th",
		"st",
		"nd",
		"rd",
		"th",
		"th",
		"th",
		"th",
		"th",
		"th",
		"th",
		"st",
	],

	from24to12: function(hours: number) {
		return hours > 12 ? hours - 12 : hours;
	},

	ampm: function(hours: number) {
		return hours < 12 ? "am" : "pm";
	},

	isoDay: function(day: number) {
		return day == 0 ? 7 : day;
	},

	lastDayOfMonth: function(dateObj: Date) {
		const tmp = new Date(dateObj.getFullYear(), dateObj.getMonth() + 1, 1);
		tmp.setTime(tmp.getTime() - 1);
		return tmp.getDate();
	},

	isLeapYear: function(year: number) {
		const tmp = new Date(year, 0, 1);
		let sum = 0;
		for (let i = 0; i < 12; i++) {
			tmp.setMonth(i);
			sum += this.lastDayOfMonth(tmp);
		}
		return sum == 365 ? "0" : "1";
	},

	dateCount: function(year: number, month: number, date: number) {
		const tmp = new Date(year, 0, 1);
		let sum = -1;
		for (let i = 0; i < month; i++) {
			tmp.setMonth(i);
			sum += this.lastDayOfMonth(tmp);
		}
		return sum + date;
	},

	distance: function(targetDate: Date, currentDate = new Date()) {
		const distance = targetDate.getTime() - currentDate.getTime();

		// Math.floor 함수를 이용해서 근접한 정수값을 가져온다.
		// 밀리초 값이기 때문에 1000을 곱한다.
		// 1000*60 => 60초(1분)*60 => 60분(1시간)*24 = 24시간(하루)
		// 나머지 연산자(%)를 이용해서 시/분/초를 구한다.
		const isFuture = targetDate.getTime() >= currentDate.getTime();
		const day = Math.abs(Math.floor(distance / (1000 * 60 * 60 * 24)));
		const hours = Math.abs(
			Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
		);
		const minutes = Math.abs(
			Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
		);
		const seconds = Math.abs(Math.floor((distance % (1000 * 60)) / 1000));

		return { isFuture, day, hours, minutes, seconds };
	},
	dday: function(targetDate: Date, currentDate = new Date()) {
		targetDate.setHours(0, 0, 0, 0);
		currentDate.setHours(0, 0, 0, 0);
		const d = this.distance(targetDate, currentDate);
		return `D${d.isFuture ? "-" : "+"}${d.day == 0 ? "DAY" : d.day}`;
	}
};


const page: any = new URL(location.toString());
page.hashParams = new URLSearchParams(location.hash.substr(1));
