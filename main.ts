class Youtube {
    constructor(private titleOfVideo: string, private views: number, private numberOfLikes: number, private numberOfDisLikes: number,private publishedOn: string, 
        private description: string, private subscribers: number, private category: string, private license: string, private numberOfComments: number, private producer?: string, private pinnedComment?: string) {
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

    // Title
    getTitleOfVideo = (): string => {
        return this.titleOfVideo;
    }

    // Views
    getViews = ():number => {
        return this.views;
    }

    // Likes
    getLikes = ():number => {
        return this.numberOfLikes;
    }

    // Dislikes
    getDislikes = ():number => {
        return this.numberOfDisLikes;
    }

    // Date
    getPublishedOn = ():string => {
        return this.publishedOn;
    }

    // Description
    getDescription = (): string => {
        return this.description;
    }

    // Subscribers
    getSubscribers = ():number => {
        return this.subscribers;
    }

    // Category
    getCategory = (): string => {
        return this.category;
    }

    // License
    getLicense = ():string => {
        return this.license;
    }

    // Number of Comments
    getNumberOfComments = ():number => {
        return this.numberOfComments;
    }

    // Producer
    getProducer = (): string => {
        return this.producer;
    }

    // PinnedComment
    getPinnedComment = (): string => {
        return this.pinnedComment;
    }

    // Related Videos
    // I've just created dummy data to show the related videos,
    // if the category of the video matches with the any of the below type.
    // The corresponding data will be returned.
    getRelatedVideos = (): any => {

        let Categories: any[] = [
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
        let rv: any[] = [];

        for (let i = 0; i < Categories.length; i++) {
            if (this.category === Categories[i].type) {
                for (let j = 0; j < Categories[i].related.length; j++) {
                    let obj = {};
                    obj["Title"] = Categories[i].related[j].title;
                    obj["ChannelName"] = Categories[i].related[j].channelName;
                    obj["Views"] = Categories[i].related[j].views;
                    rv.push(obj);
                }
            }
        }
        return rv;
    }
}

// VideoOne is created.
let videoOne = new Youtube(`Huawei P20 Pro Unboxing and First Look - The Triple Camera Monster 🔥🔥🔥`, 496589, 37000, 1200, "May 23, 2018", `Namaskaar Dosto, is video mein maine aapse Huawei P20 Pro ke baare mein baat ki hai,
maine aapke liye unbox kiya hai Huawei P20 Pro smartphone ko jisme Triple Rear Cameras hai ek 40MP ka,
ek 20MP ka, aur ek 8MP ka, saath mein 24MP ka front facing camera, 
isme Kirin 970 Processor hai aur 6GB RAM hai aur 128GB ROM hai. Huawei P20 Pro IP67 certified phone hai aur isme 4000mAh battery hai. 
India mein Huawei P20 Pro ko launch kiya hai 64,999RS ki price mein. Mujhe umeed hai ki aapko P20 Pro ki yeh video pasand aayegi. `,
6020000, "SciencenTechnology", `Standard Youtube License`, 8663, undefined, "Maximum kitne camera ho ek phone mein?");


// Displaying the content of a particular video on video page.
console.log(`Title: ${videoOne.getTitleOfVideo()} \n
Views: ${videoOne.getViews()} \n
Likes: ${videoOne.getLikes()} \n
Dislikes: ${videoOne.getDislikes()} \n
Published On: ${videoOne.getPublishedOn()} \n
Description: ${videoOne.getDescription()} \n
Subscribers: ${videoOne.getSubscribers()} \n
Category: ${videoOne.getCategory()} \n
License: ${videoOne.getLicense()} \n
Comments: ${videoOne.getNumberOfComments()} \n
PinnedComment: ${videoOne.getPinnedComment()}`
);


// getting the related videos based on the category and storing them in relatedVideos.
let relatedVideos = videoOne.getRelatedVideos();

// Displaying the Related videos on the youtube video page.
console.log("\nRelated Videos:");
for(let i of relatedVideos){
    console.log(`\nTitle: ${i.Title}
Channel Name: ${i.ChannelName}
Views: ${i.views}\n`);
}
