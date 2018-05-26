var Youtube = /** @class */ (function () {
    function Youtube(titleOfVideo, views, numberOfLikes, numberOfDisLikes, publishedOn, description, subscribers, category, license, numberOfComments, producer, pinnedComment) {
        var _this = this;
        this.titleOfVideo = titleOfVideo;
        this.views = views;
        this.numberOfLikes = numberOfLikes;
        this.numberOfDisLikes = numberOfDisLikes;
        this.publishedOn = publishedOn;
        this.description = description;
        this.subscribers = subscribers;
        this.category = category;
        this.license = license;
        this.numberOfComments = numberOfComments;
        this.producer = producer;
        this.pinnedComment = pinnedComment;
        // Title
        this.getTitleOfVideo = function () {
            return _this.titleOfVideo;
        };
        // Views
        this.getViews = function () {
            return _this.views;
        };
        // Likes
        this.getLikes = function () {
            return _this.numberOfLikes;
        };
        // Dislikes
        this.getDislikes = function () {
            return _this.numberOfDisLikes;
        };
        // Date
        this.getPublishedOn = function () {
            return _this.publishedOn;
        };
        // Description
        this.getDescription = function () {
            return _this.description;
        };
        // Subscribers
        this.getSubscribers = function () {
            return _this.subscribers;
        };
        // Category
        this.getCategory = function () {
            return _this.category;
        };
        // License
        this.getLicense = function () {
            return _this.license;
        };
        // Number of Comments
        this.getNumberOfComments = function () {
            return _this.numberOfComments;
        };
        // Producer
        this.getProducer = function () {
            return _this.producer;
        };
        // PinnedComment
        this.getPinnedComment = function () {
            return _this.pinnedComment;
        };
        // Related Videos
        // I've just created dummy data to show the related videos,
        // if the category of the video matches with the any of the below type.
        // The corresponding data will be returned.
        this.getRelatedVideos = function () {
            var Categories = [
                {
                    type: "AutonVehicles",
                    related: [
                        {
                            title: "5 BEST Self Driving Cars Of Future",
                            channelName: "Car City",
                            views: "12M views"
                        },
                        {
                            title: "10 Most Insane Motor Cycles In The World",
                            channelName: "Interesting Facts",
                            views: "32M views"
                        },
                        {
                            title: "7 Real Transforming Vehicles You Didn't Know Existed",
                            channelName: "Thansis1997",
                            views: "61M views"
                        },
                        {
                            title: "BMW Vision Self Driving Car",
                            channelName: "CARJAM TV",
                            views: "5.1M views"
                        }
                    ]
                },
                {
                    type: "BeautynFashion",
                    related: [
                        {
                            title: "Beauty and Fashion Hacks Compilation",
                            channelName: "Beauty School",
                            views: "29,852 views"
                        },
                        {
                            title: "MAKE UP HACKS COMPILATION 2017",
                            channelName: "MakeUp TV",
                            views: "14K views"
                        },
                        {
                            title: "DIY Clothes Life Hacks Compilation",
                            channelName: "Beauty TV",
                            views: "274K views"
                        },
                        {
                            title: "Avengers: Infinity War, THANOS MakeUp",
                            channelName: "SPLRD",
                            views: "3.7M views"
                        }
                    ]
                },
                {
                    type: "SciencenTechnology",
                    related: [
                        {
                            title: "TOP 7 BEST PHONES UNDER 10,000",
                            channelName: "Trakin Tech",
                            views: "1M views"
                        },
                        {
                            title: "best 4gb RAM smartphones under 10,000",
                            channelName: "Interesting Facts",
                            views: "32M views"
                        },
                        {
                            title: "LENOVO Z5 - THE FUTURE IS HERE!!!",
                            channelName: "Ntec Phones",
                            views: "2.9M views"
                        },
                        {
                            title: "Paisa Vasool Mid Range Smartphones",
                            channelName: "GeekyRanjit",
                            views: "1.1M views"
                        }
                    ]
                },
                {
                    type: "Entertainment",
                    related: [
                        {
                            title: "BAO - Pixar Short Movie (Animation, 2018)",
                            channelName: "Cinema for Kids",
                            views: "76M views"
                        },
                        {
                            title: "LOU (2017) Short Film",
                            channelName: "Lights Camera Life",
                            views: "3.4M views"
                        },
                        {
                            title: "Piper",
                            channelName: "Engenheiro Criativo",
                            views: "8.3M views"
                        },
                        {
                            title: "Lifted - Pixar",
                            channelName: "Adam Crossley",
                            views: "6.9M views"
                        }
                    ]
                }
            ];
            // Array to store the related videos
            var rv = [];
            for (var i = 0; i < Categories.length; i++) {
                if (_this.category === Categories[i].type) {
                    for (var j = 0; j < Categories[i].related.length; j++) {
                        var obj = {};
                        obj["Title"] = Categories[i].related[j].title;
                        obj["ChannelName"] = Categories[i].related[j].channelName;
                        obj["Views"] = Categories[i].related[j].views;
                        rv.push(obj);
                    }
                }
            }
            return rv;
        };
        this.titleOfVideo = titleOfVideo;
        this.views = views;
        this.numberOfLikes = numberOfLikes;
        this.numberOfDisLikes = numberOfDisLikes;
        this.publishedOn = publishedOn;
        this.description = description;
        this.subscribers = subscribers;
        this.category = category;
        this.license = license;
        this.numberOfComments = numberOfComments;
        this.producer = producer;
        this.pinnedComment = pinnedComment;
    }
    return Youtube;
}());
// VideoOne is created.
var videoOne = new Youtube("Huawei P20 Pro Unboxing and First Look - The Triple Camera Monster \uD83D\uDD25\uD83D\uDD25\uD83D\uDD25", 496589, 37000, 1200, "May 23, 2018", "Namaskaar Dosto, is video mein maine aapse Huawei P20 Pro ke baare mein baat ki hai,\nmaine aapke liye unbox kiya hai Huawei P20 Pro smartphone ko jisme Triple Rear Cameras hai ek 40MP ka,\nek 20MP ka, aur ek 8MP ka, saath mein 24MP ka front facing camera, \nisme Kirin 970 Processor hai aur 6GB RAM hai aur 128GB ROM hai. Huawei P20 Pro IP67 certified phone hai aur isme 4000mAh battery hai. \nIndia mein Huawei P20 Pro ko launch kiya hai 64,999RS ki price mein. Mujhe umeed hai ki aapko P20 Pro ki yeh video pasand aayegi. ", 6020000, "SciencenTechnology", "Standard Youtube License", 8663, undefined, "Maximum kitne camera ho ek phone mein?");
// Displaying the content of a particular video on video page.
console.log("Title: " + videoOne.getTitleOfVideo() + " \n\nViews: " + videoOne.getViews() + " \n\nLikes: " + videoOne.getLikes() + " \n\nDislikes: " + videoOne.getDislikes() + " \n\nPublished On: " + videoOne.getPublishedOn() + " \n\nDescription: " + videoOne.getDescription() + " \n\nSubscribers: " + videoOne.getSubscribers() + " \n\nCategory: " + videoOne.getCategory() + " \n\nLicense: " + videoOne.getLicense() + " \n\nComments: " + videoOne.getNumberOfComments() + " \n\nPinnedComment: " + videoOne.getPinnedComment());
// getting the related videos based on the category and storing them in relatedVideos.
var relatedVideos = videoOne.getRelatedVideos();
// Displaying the Related videos on the youtube video page.
console.log("\nRelated Videos:");
for (var _i = 0, relatedVideos_1 = relatedVideos; _i < relatedVideos_1.length; _i++) {
    var i = relatedVideos_1[_i];
    console.log("\nTitle: " + i.Title + "\nChannel Name: " + i.ChannelName + "\nViews: " + i.views + "\n");
}
