"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.Profile = void 0;
var react_1 = require("react");
var reactstrap_1 = require("reactstrap");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var free_regular_svg_icons_1 = require("@fortawesome/free-regular-svg-icons");
// import { Link } from 'react-router-dom';
require("react-responsive-carousel/lib/styles/carousel.min.css"); // requires a loader
var react_responsive_carousel_1 = require("react-responsive-carousel");
var LiveCourseList_1 = require("../component/LiveCourseList");
var commentBox_1 = require("../component/commentBox");
var use_react_router_1 = require("use-react-router");
function Profile() {
    var _a, _b;
    var _c = react_1.useState(null), objs = _c[0], setObjs = _c[1];
    var _d = react_1.useState(null), PTInfo = _d[0], setPTInfo = _d[1];
    // const socket = io.connect();
    // socket.on('comment-update', () => {
    //     readAndDisplayComment()
    // })
    // let post_id = query.get("post")
    // let count = 0;   //for adding pagination in the future
    // async function readAndDisplayComment() {
    //     let contents = await fetchComments(parseInt(post_id), count)
    //     displayComments(contents, document.querySelector("#comment"))
    // }
    // readAndDisplayComment()
    var fetchComments = function fetchComments() {
        return __awaiter(this, void 0, void 0, function () {
            var res, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(process.env.REACT_APP_BACKEND_URL + "/getComments", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json; charset=utf-8"
                            }
                        })];
                    case 1:
                        res = _a.sent();
                        return [4 /*yield*/, res.json()];
                    case 2:
                        result = _a.sent();
                        //could be empty array as no record, return null
                        if (Array.isArray(result.result) && result.result.length > 0) {
                            setObjs(result.result);
                        }
                        else {
                            return [2 /*return*/, setObjs(null)];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    var id = use_react_router_1["default"]().match.params.id;
    // const id = '1'
    console.log('check data', id);
    var fetchPTInfo = function fetchPTInfo(id) {
        return __awaiter(this, void 0, void 0, function () {
            var res, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(process.env.REACT_APP_BACKEND_URL + "/getPTInfo?ptId=" + id, {
                        // headers: {
                        //     "Content-Type": "application/json; charset=utf-8",
                        // }
                        })];
                    case 1:
                        res = _a.sent();
                        return [4 /*yield*/, res.json()];
                    case 2:
                        result = _a.sent();
                        console.log('data', result);
                        if (Array.isArray(result.result) && result.result.length > 0) {
                            setPTInfo(result.result[0]);
                        }
                        else {
                            return [2 /*return*/, setPTInfo(null)];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    var _e = react_1.useState(0), Change = _e[0], onChange = _e[1];
    var _f = react_1.useState(0), ClickItem = _f[0], onClickItem = _f[1];
    var _g = react_1.useState(0), ClickThumb = _g[0], onClickThumb = _g[1];
    react_1.useEffect(function () {
        fetchPTInfo(parseInt(id));
        fetchComments();
    }, [id, Change, ClickItem, ClickThumb]); // eslint-disable-line react-hooks/exhaustive-deps
    // const [index, setIndex] = useState(0);
    // const [onChange] = useState(0)
    // const [onClickItem] = useState(0)
    // const [onClickThumb] = useState(0)
    return (react_1["default"].createElement(reactstrap_1.Container, { fluid: true },
        react_1["default"].createElement("div", { className: "profileBorder" },
            react_1["default"].createElement(reactstrap_1.Row, null,
                react_1["default"].createElement(reactstrap_1.Col, { xs: 9 },
                    react_1["default"].createElement("div", { className: "highlight" }, PTInfo === null || PTInfo === void 0 ? void 0 : PTInfo.displayname)),
                react_1["default"].createElement(reactstrap_1.Col, { xs: 3 },
                    react_1["default"].createElement("div", { className: "editBtn" },
                        react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { className: "pen", icon: free_solid_svg_icons_1.faPen }),
                        "Edit Profile"))),
            react_1["default"].createElement(reactstrap_1.Row, null,
                react_1["default"].createElement(reactstrap_1.Col, { xs: 6, md: 4 },
                    react_1["default"].createElement("div", { className: "profileBox" },
                        react_1["default"].createElement(reactstrap_1.Row, null,
                            react_1["default"].createElement("div", { className: "markFav" },
                                react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { className: "sun", icon: free_regular_svg_icons_1.faHeart }),
                                "     Mark as Your Favourite PT")),
                        react_1["default"].createElement(reactstrap_1.Row, null,
                            react_1["default"].createElement(react_responsive_carousel_1.Carousel, { className: "profilePic", showIndicators: false, showArrows: true, onChange: onChange, onClickItem: onClickItem, showStatus: false, onClickThumb: onClickThumb }, (Array.isArray(PTInfo)) ? PTInfo[0].photo.map(function (no, link) {
                                return react_1["default"].createElement("div", { key: no },
                                    react_1["default"].createElement("img", { alt: "profilePic1", src: "http://d1ihwto1mjjxce.cloudfront.net/" + link }));
                            }) : null)),
                        react_1["default"].createElement(reactstrap_1.Row, null,
                            react_1["default"].createElement("div", { className: "ratingsProfile" },
                                react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { className: "thumbed", icon: free_solid_svg_icons_1.faThumbsUp }),
                                react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { className: "thumb", icon: free_regular_svg_icons_1.faThumbsUp }),
                                react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { className: "thumb", icon: free_regular_svg_icons_1.faThumbsUp }),
                                react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { className: "thumb", icon: free_regular_svg_icons_1.faThumbsUp }),
                                react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { className: "thumb", icon: free_regular_svg_icons_1.faThumbsUp }),
                                (Array.isArray(PTInfo)) ? PTInfo.map(function (info) {
                                    console.log(PTInfo);
                                    return react_1["default"].createElement("div", { className: "highlight" },
                                        "( ", info === null || info === void 0 ? void 0 :
                                        info.ratingNo,
                                        " Ratings)");
                                }) : null,
                                react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { className: "addComment", icon: free_solid_svg_icons_1.faPlusCircle }))))),
                react_1["default"].createElement(reactstrap_1.Col, { xs: 12, md: 8 },
                    react_1["default"].createElement("div", { className: "infoSide" },
                        react_1["default"].createElement(reactstrap_1.Row, null,
                            react_1["default"].createElement("div", { className: "forQS" },
                                react_1["default"].createElement(reactstrap_1.Col, null,
                                    react_1["default"].createElement("div", { className: "qua" },
                                        react_1["default"].createElement("div", { className: "ptTitle" },
                                            react_1["default"].createElement("div", { className: "highlight" },
                                                "Qualification",
                                                react_1["default"].createElement("br", null))),
                                        (Array.isArray(PTInfo)) ? (_a = PTInfo.qualification) === null || _a === void 0 ? void 0 : _a.map(function (i, qualification) {
                                            return react_1["default"].createElement("div", { className: "realQua" },
                                                "   ",
                                                react_1["default"].createElement("p", { key: i },
                                                    react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { className: "tick", icon: free_solid_svg_icons_1.faCheck }),
                                                    "  ",
                                                    qualification));
                                        }) : null)),
                                react_1["default"].createElement(reactstrap_1.Col, null,
                                    react_1["default"].createElement("div", { className: "areas" },
                                        react_1["default"].createElement("div", { className: "ptTitle highlight" }, "Specialty areas"),
                                        react_1["default"].createElement("div", { className: "realAreas" }, (Array.isArray(PTInfo)) ? (_b = PTInfo.speciality) === null || _b === void 0 ? void 0 : _b.map(function (area, o) {
                                            return react_1["default"].createElement("p", { key: o },
                                                react_1["default"].createElement(react_fontawesome_1.FontAwesomeIcon, { className: "tick", icon: free_solid_svg_icons_1.faCheck }),
                                                area);
                                        }) : null))))),
                        react_1["default"].createElement(reactstrap_1.Row, null,
                            react_1["default"].createElement(reactstrap_1.Col, null,
                                react_1["default"].createElement("div", { className: "aboutMe" },
                                    react_1["default"].createElement("span", { className: "highlight aboutmeTitle" }, " About me"),
                                    react_1["default"].createElement("br", null),
                                    react_1["default"].createElement("div", { className: "realAbout" },
                                        " ", PTInfo === null || PTInfo === void 0 ? void 0 :
                                        PTInfo.intro)))),
                        objs != null ? objs.map(function (obj, k) {
                            return react_1["default"].createElement(commentBox_1.CommentBox, { commentName: obj.commentName, rating: obj.score, content: obj.content, key: k });
                        }) : react_1["default"].createElement("div", null, "Be our first PT")))),
            react_1["default"].createElement(reactstrap_1.Row, null,
                react_1["default"].createElement(LiveCourseList_1.LiveCourseList, { tablename: "Course List", rows: [{
                            course_name: "yoga",
                            category1: "cat1",
                            category2: "cat2",
                            startTime: "11:00",
                            endTime: "12:30",
                            date: "2020/2/2",
                            participant: [{
                                    name: "a",
                                    gender: "M",
                                    height: 100,
                                    weight: 100,
                                    frequency: "often",
                                    focus: "keep fit",
                                    goal: "fit"
                                }]
                        }] })))));
}
exports.Profile = Profile;
