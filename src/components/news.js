import React, { Component } from "react";
import NewsItem from "./newsitem";
export default class News extends Component {
  articles = [
    {
      status: "ok",
      totalResults: 3032,
      articles: [
        {
          source: {
            id: "bbc-news",
            name: "BBC News",
          },
          author: null,
          title: "Women's T20 Cricket",
          description:
            "All the action from England’s fourth T20 match against New Zealand at The Oval.",
          url: "https://www.bbc.co.uk/iplayer/episode/m00217ll/womens-t20-cricket-2024-england-v-new-zealand-fourth-t20-highlights",
          urlToImage:
            "https://ichef.bbci.co.uk/images/ic/1200x675/p0j8bqht.jpg",
          publishedAt: "2024-07-13T22:22:49Z",
          content:
            "Catch up on all the action from Englands fourth match of the T20 series at The Oval in south London.",
        },
        {
          source: {
            id: "bbc-news",
            name: "BBC News",
          },
          author: null,
          title: "Women's ODI Cricket",
          description:
            "Highlights of England women’s second ODI against New Zealand at Worcester.",
          url: "https://www.bbc.co.uk/iplayer/episode/m0020vjc/womens-odi-cricket-2024-england-v-new-zealand-second-odi-highlights",
          urlToImage:
            "https://ichef.bbci.co.uk/images/ic/1200x675/p0j6xg1f.jpg",
          publishedAt: "2024-06-30T22:20:44Z",
          content:
            "Highlights of England womens second one-day international against New Zealand at Worcestershire New Road, Worcester.",
        },
        {
          source: {
            id: null,
            name: "BBC News",
          },
          author: null,
          title: "England cricketer's home and cars hit in two attacks",
          description:
            "Police appeal for information after the attacks at the home of Hampshire cricketer James Vince.",
          url: "https://www.bbc.com/news/articles/c72977dveelo",
          urlToImage:
            "https://ichef.bbci.co.uk/news/1024/branded_news/ce40/live/433957b0-4379-11ef-81b7-eb26ff9f97f3.jpg",
          publishedAt: "2024-07-16T15:59:50Z",
          content:
            "By Curtis Lancaster, BBC News\r\nHampshire cricket captain James Vince and his family have been forced to move out of their home, the BBC understands\r\nPolice are investigating two incidents of criminal… [+1420 chars]",
        },
        {
          source: {
            id: null,
            name: "BBC News",
          },
          author: null,
          title: "England fans' weird and wonderful road to Euro 2024 final",
          description:
            "From celebrating with the Killers to renaming street signs, the Euros has been full of unique fan moments.",
          url: "https://www.bbc.com/news/articles/ckmg5l3y5v8o",
          urlToImage:
            "https://ichef.bbci.co.uk/news/1024/branded_news/d418/live/34e7e8c0-4036-11ef-b74c-bb483a802c97.jpg",
          publishedAt: "2024-07-13T03:13:12Z",
          content:
            "By Tim Dodd, BBC News, England\r\nThe England celebrations were shown on a big screen at The Killers' O2 gig on Wednesday\r\nEngland have done it again - they've made it to a Euros final. Facing Spain on… [+7331 chars]",
        },
        {
          source: {
            id: null,
            name: "NPR",
          },
          author: "Mansee Khurana",
          title:
            "India wins the T20 World Cup, defeating South Africa for the cricket title",
          description:
            "After a rough start, India turned the match around, winning in a nail-biter. This was India’s second T20 World Cup win; the team won the inaugural T20 World Cup in 2007.",
          url: "https://www.npr.org/2024/06/29/nx-s1-5023676/india-cricket-t20-world-cup-south-africa",
          urlToImage:
            "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/8640x4860+0+453/resize/1400/quality/100/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Fed%2F36%2F7c1147c04e77a72370dd078dec78%2Fap24181696267025.jpg",
          publishedAt: "2024-06-30T00:52:13Z",
          content:
            "Indias mens cricket team won a nail-biter final game against South Africa in the Twenty20 World Cup match on Saturday, putting an end to the countrys 13-year drought in the global cricket arena.\r\nBot… [+3659 chars]",
        },
        {
          source: {
            id: null,
            name: "BBC News",
          },
          author: "Stephan Shemilt",
          title: "Pope century gives England upper hand on Windies",
          description:
            "Ollie Pope’s sparkling century leads England to 416 on a hectic first day of the second Test against West Indies at Trent Bridge.",
          url: "https://www.bbc.com/sport/cricket/articles/cg64newz936o",
          urlToImage:
            "https://ichef.bbci.co.uk/news/1024/branded_sport/5474/live/20701840-451d-11ef-96a8-e710c6bfc866.jpg",
          publishedAt: "2024-07-18T17:45:07Z",
          content:
            "Ollie Popes sparkling century led England to 416 on a hectic first day of the second Test against West Indies at Trent Bridge.\r\nNumber-three Pope arrived with the hosts 0-1 and caressed 121, adding 1… [+1085 chars]",
        },
        {
          source: {
            id: null,
            name: "BBC News",
          },
          author: "Stephan Shemilt",
          title: "'Foakes has helped me with England debut' - Smith",
          description:
            "Jamie Smith says Ben Foakes has helped him with his Test debut despite replacing his Surrey team-mate as England’s wicketkeeper.",
          url: "https://www.bbc.com/sport/cricket/articles/c724w77k4yno",
          urlToImage:
            "https://ichef.bbci.co.uk/news/1024/branded_sport/3e91/live/072fb3b0-3fb2-11ef-b74c-bb483a802c97.jpg",
          publishedAt: "2024-07-11T18:56:25Z",
          content:
            "Jamie Smith says Ben Foakes has helped him with his Test debut despite replacing his Surrey team-mate as England's wicketkeeper.\r\nFoakes, arguably the best keeper in the world, is Surrey's first choi… [+1209 chars]",
        },
        {
          source: {
            id: null,
            name: "ReadWrite",
          },
          author: "Brian-Damien Morgan",
          title:
            "Game Pass gets Neon White, Flock, Nickelodeon All-Star Brawl 2, and More",
          description:
            "Xbox Wire has updated the list of titles coming to Game Pass in July, including Neon White, Flock, Nickelodeon All-Star… Continue reading Game Pass gets Neon White, Flock, Nickelodeon All-Star Brawl 2, and More\nThe post Game Pass gets Neon White, Flock, Nicke…",
          url: "https://readwrite.com/game-pass-gets-neon-white-flock-nickelodeon-all-star-brawl-2-and-more/",
          urlToImage:
            "https://readwrite.com/wp-content/uploads/2024/07/Game-Pass-gets-Neon-White-Flock-Nickelodeon-All-Star-Brawl-2-and-More.jpg",
          publishedAt: "2024-07-03T02:22:16Z",
          content:
            "Xbox Wire has updated the list of titles coming to Game Pass in July, including Neon White, Flock, Nickelodeon All-Star Brawl 2, and more.\r\nEight new games will be coming to the monthly subscription … [+1164 chars]",
        },
        {
          source: {
            id: null,
            name: "BBC News",
          },
          author: null,
          title: "World Cup glory a vindication for India cricket legends",
          description:
            "India defeated South Africa by seven runs on Saturday to bring home a World Cup after 13 years.",
          url: "https://www.bbc.com/news/articles/c3ge87ew7kyo",
          urlToImage:
            "https://ichef.bbci.co.uk/news/1024/branded_news/85c7/live/d448fd00-3771-11ef-a780-47cb50223b50.jpg",
          publishedAt: "2024-07-01T09:38:48Z",
          content:
            "By Cherylann Mollan, BBC News\r\nFans celebrate on Delhi streets after India's win\r\nIndians are continuing to celebrate their cricket team's triumph at the T20 World Cup, which is being seen as a fitti… [+4674 chars]",
        },
        {
          source: {
            id: "the-verge",
            name: "The Verge",
          },
          author: "Chris Welch",
          title: "Google has big new ideas about the Play Store",
          description:
            "Google is rolling out several new features for Google Play including Collections, AI-powered app comparisons, and new rewards prizes like Pixel hardware.",
          url: "https://www.theverge.com/2024/7/24/24205052/google-play-collections-ai-features-rewards-pixel",
          urlToImage:
            "https://cdn.vox-cdn.com/thumbor/0_xMEsB9zff5Ijh5sChb42Q8w2w=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/23999605/acastro_STK460_googlePlay_02.jpg",
          publishedAt: "2024-07-24T13:00:00Z",
          content:
            "Google has big new ideas about the Play Store\r\nGoogle has big new ideas about the Play Store\r\n / The company is rolling out several new features today including Collections, AI-powered app comparison… [+3762 chars]",
        },
        {
          source: {
            id: "business-insider",
            name: "Business Insider",
          },
          author: "Jennifer Barton",
          title:
            "I'm an American mom living in London. School ends in mid-July and my kids don't go to sleep-away camp.",
          description:
            "I'm a New Yorker living in London with my four kids. They have school until mid-July and the city has a ton of free activities to keep entertained.",
          url: "https://www.businessinsider.com/american-mom-london-school-goes-until-july-camp-not-common-2024-6",
          urlToImage:
            "https://i.insider.com/66749aba886e840164be99a6?width=1200&format=jpeg",
          publishedAt: "2024-06-27T15:13:02Z",
          content:
            "The author says London offers a lot of free things to do during the summer break.Courtesy of the author\r\n\u003Cul\u003E\u003Cli\u003ESummer camp culture doesn't exist in the UK like it does in the US.\u003C/li\u003E\u003Cli\u003ESummer bre… [+3732 chars]",
        },
        {
          source: {
            id: "business-insider",
            name: "Business Insider",
          },
          author: "insider@insider.com (Lillian Brown)",
          title:
            "How to watch India vs. England: Live stream T20 World Cup semis",
          description:
            "India and England will compete in the semi-finals at the ICC Men's T20 World Cup on Thursday. We'll show you how to live stream the game from anywhere.",
          url: "https://www.businessinsider.com/guides/streaming/how-to-watch-india-vs-england-t20-world-cup-2024",
          urlToImage:
            "https://i.insider.com/66636214ed9a404d829bd993?width=1200&format=jpeg",
          publishedAt: "2024-06-27T11:30:01Z",
          content:
            "When you buy through our links, Business Insider may earn an affiliate commission. Learn more\r\nThe end of the ICC Men's T20 World Cup is in sight as India and England compete for the last slot in the… [+5471 chars]",
        },
        {
          source: {
            id: "espn",
            name: "ESPN",
          },
          author: null,
          title: "Follow live: India, South Africa meet in World Cup final",
          description:
            "Check India vs South Africa, ICC Men's T20 World Cup 2024 2024, Final Match scoreboard, ball by ball commentary, updates only on ESPN.com. Check India vs South Africa Final Videos, Reports Articles Online.",
          url: "https://www.espn.com/cricket/series/8604/game/1415755/",
          urlToImage:
            "https://a.espncdn.com/combiner/i?img=/i/espn/espn_logos/espncricinfo.png",
          publishedAt: "2024-06-29T14:38:58Z",
          content:
            "10.26 The anthems are done, and we're ready to begin. Will India reclaim the trophy they last won - with consequences that changed the face of cricket - in 2007, or will South Africa lift their first… [+22481 chars]",
        },
        {
          source: {
            id: null,
            name: "Android Police",
          },
          author: "Samuel Contreras",
          title:
            "T-Mobile vs. Cricket: Is fast T-Mobile 5G worth more than vast AT&T coverage?",
          description:
            "Cricket’s prepaid plans can be better value than T-Mobile",
          url: "https://www.androidpolice.com/t-mobile-vs-cricket/",
          urlToImage:
            "https://static1.anpoimages.com/wordpress/wp-content/uploads/2024/06/t-mobile-vs-cricket-wireless-header-image-ap.jpg",
          publishedAt: "2024-06-29T13:00:12Z",
          content:
            "\u003Cul\u003E\u003Cli\u003E\r\nT-Mobile\r\nT-Mobiles massive 5G network makes it a good fit for many heavier users. But with high single-line prices and a smorgasbord of plans that seem mostly identical, it can be hard to … [+14057 chars]",
        },
        {
          source: {
            id: "time",
            name: "Time",
          },
          author: "Olivia B. Waxman",
          title: "The Small English Town That Launched the Modern Olympics",
          description:
            "A 1890s sports tournament in an English town called Much Wenlock led to the modern Olympic games.",
          url: "https://time.com/6992530/modern-olympics-origins-much-wenlock/",
          urlToImage:
            "https://api.time.com/wp-content/uploads/2024/06/much-wenlock-olympics.jpg?quality=85&w=1024&h=628&crop=1",
          publishedAt: "2024-07-19T11:00:00Z",
          content:
            "Despite the Greek roots of the word Olympic, the 2024 Paris Summer Olympics will bear little resemblance to the sports tournaments in ancient Greece.\r\nThe ancient origins of the Olympics can be trace… [+3052 chars]",
        },
        {
          source: {
            id: "bbc-news",
            name: "BBC News",
          },
          author: null,
          title: "Women's T20 Cricket",
          description:
            "Highlights of England and New Zealand's first T20 match at Utilita Bowl, Southampton.",
          url: "https://www.bbc.co.uk/iplayer/episode/m00211zf/womens-t20-cricket-2024-england-v-new-zealand-first-t20-highlights",
          urlToImage:
            "https://ichef.bbci.co.uk/images/ic/1200x675/p0j8bqht.jpg",
          publishedAt: "2024-07-06T22:23:27Z",
          content:
            "Highlights from Utilita Bowl, Southampton, as England take on New Zealand in the first of a five-match T20 series.",
        },
        {
          source: {
            id: "bbc-news",
            name: "BBC News",
          },
          author: null,
          title: "Women's T20 Cricket",
          description:
            "Highlights of England's second T20 against New Zealand at Hove.",
          url: "https://www.bbc.co.uk/iplayer/episode/m002121n/womens-t20-cricket-2024-10-england-v-new-zealand-second-t20-highlights",
          urlToImage:
            "https://ichef.bbci.co.uk/images/ic/1200x675/p0j8bqht.jpg",
          publishedAt: "2024-07-09T22:20:56Z",
          content:
            "Highlights of England's second T20 against New Zealand at The 1st Central County Ground, Hove.",
        },
        {
          source: {
            id: null,
            name: "Android Central",
          },
          author: "techkritiko@gmail.com (Jay Bonggolto)",
          title:
            "AT&T data breach compromised phone records of nearly all its customers",
          description:
            "AT&T suffered a data theft targeted at a third-party cloud provider, exposing call records from millions of customers.",
          url: "https://www.androidcentral.com/phones/carriers/atandt-data-breach-compromised-phone-records-of-nearly-all-its-customers",
          urlToImage:
            "https://cdn.mos.cms.futurecdn.net/kk7y52Qo7PKsmoBtgrWW9K-1200-80.jpg",
          publishedAt: "2024-07-13T09:58:49Z",
          content:
            "What you need to know\r\n\u003Cul\u003E\u003Cli\u003EHackers stole phone records of over 100 million AT&amp;T customers from 2022, including phone numbers, call/text counts, durations, and cell site IDs.\u003C/li\u003E\u003Cli\u003EAT&amp;T … [+3507 chars]",
        },
        {
          source: {
            id: null,
            name: "Mental Floss",
          },
          author: "Mark Peters",
          title: "Why Do We Say “Crickets” When It’s Silent?",
          description:
            "Cricket chirps can reach 100 decibels. So why do we use them as a byword for ‘silence’?",
          url: "https://www.mentalfloss.com/posts/why-does-crickets-mean-silence",
          urlToImage:
            "https://images2.minutemediacdn.com/image/upload/c_crop,w_3838,h_2158,x_0,y_0/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/images/voltaxMediaLibrary/mmsport/mentalfloss/01j1gb154pjdwj2t3j4s.jpg",
          publishedAt: "2024-07-15T13:58:00Z",
          content:
            "What are the sounds of silence? With all due respect to Simon and Garfunkel, the most common answer is crickets. This noisy insect has somehow become synonymous with no sound at all.\r\nThis sense of t… [+3390 chars]",
        },
        {
          source: {
            id: null,
            name: "NPR",
          },
          author: "Mansee Khurana",
          title:
            "Early in the hurricane season, an unusually strong storm moves through the Caribbean",
          description:
            "Beryl strengthened from a tropical storm into a hurricane on Saturday as the storm makes its way through the southeast Caribbean. It is expected to become a major hurricane.",
          url: "https://www.npr.org/2024/06/29/nx-s1-5023668/hurricane-beryl-caribbean-barbados",
          urlToImage:
            "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/897x505+0+117/resize/1400/quality/100/format/png/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F0a%2Fd6%2Fee841d9f42849b1f6807f5f10bdd%2Fberyl-hurricane.png",
          publishedAt: "2024-06-29T22:25:08Z",
          content:
            "Beryl strengthened from a tropical storm into a hurricane on Saturday as the storm makes its way through the southeast Caribbean.\r\nA hurricane warning is now in effect for Barbados, while Saint Lucia… [+2903 chars]",
        },
        {
          source: {
            id: null,
            name: "BBC News",
          },
          author: null,
          title: "Ghosts of Olympics past leave their mark in Paris",
          description:
            "More than 100 years on, traces of the 1900 and 1924 Olympics remain across the French capital.",
          url: "https://www.bbc.com/news/articles/cerv1142mmvo",
          urlToImage:
            "https://ichef.bbci.co.uk/news/1024/branded_news/2bfd/live/8f6ef420-443a-11ef-96a8-e710c6bfc866.jpg",
          publishedAt: "2024-07-19T05:01:07Z",
          content:
            "By Hugh Schofield, Paris Correspondent\r\nParis has hosted the Summer Olympics twice before - in 1900 and 1924 (pictured)\r\nIf Greece is the cradle of the Olympics, Paris represents its home.\r\nSo begins… [+5636 chars]",
        },
        {
          source: {
            id: null,
            name: "BBC News",
          },
          author: null,
          title: "How Antigua changed the face of global cricket",
          description:
            "West Indies legends Sir Richie Richardson, Sir Vivian Richards, Sir Curtly Ambrose and Sir Andy Roberts explain how Antigua - an island with fewer than 100,000 people - changed the face of global cricket.",
          url: "https://www.bbc.com/sport/cricket/videos/ceqdv8ddvv0o",
          urlToImage:
            "https://ichef.bbci.co.uk/ace/standard/1024/cpsprodpb/7886/live/7fa7dff0-4059-11ef-96a8-e710c6bfc866.jpg",
          publishedAt: "2024-07-18T06:11:22Z",
          content:
            "West Indies legends Sir Richie Richardson, Sir Vivian Richards, Sir Curtly Ambrose and Sir Andy Roberts explain how Antigua - an island with fewer than 100,000 people - changed the face of global cri… [+93 chars]",
        },
        {
          source: {
            id: null,
            name: "Variety",
          },
          author: "Tim Chan",
          title:
            "India vs. South Africa Cricket World Cup Final Livestream: How to Watch the T20 Match Online Free",
          description:
            "The battle for cricket supremacy comes down to this: India takes on South Africa today in the ICC T20 World Cup final, with the winners claiming the 2024 Cricket World Cup trophy. The India vs. South Africa Cricket World Cup final airs today, Saturday June 29…",
          url: "https://variety.com/2024/shopping/athletes/india-vs-south-africa-cricket-world-cup-live-stream-t20-final-online-free-1236055825/",
          urlToImage:
            "https://variety.com/wp-content/uploads/2024/06/GettyImages-2159570933.jpg?w=1000&h=563&crop=1",
          publishedAt: "2024-06-29T13:10:00Z",
          content:
            "If you purchase an independently reviewed product or service through a link on our website, Variety may receive an affiliate commission.\r\nThe battle for cricket supremacy comes down to this: India ta… [+2233 chars]",
        },
        {
          source: {
            id: "al-jazeera-english",
            name: "Al Jazeera English",
          },
          author: "Al Jazeera",
          title:
            "Indian cricket board appoints Gautam Gambhir as men’s head coach",
          description:
            "The former batter and BJP politician will take charge of the Indian team following Rahul Dravid's decision to step away.",
          url: "https://www.aljazeera.com/sports/2024/7/9/indian-cricket-board-appoints-gautam-gambhir-as-mens-head-coach",
          urlToImage:
            "https://www.aljazeera.com/wp-content/uploads/2024/07/2016-10-08T120000Z_591815984_S1BEUFSZEXAB_RTRMADP_3_CRICKET-INDIA-1720539415.jpg?resize=1920%2C1440",
          publishedAt: "2024-07-09T16:18:20Z",
          content:
            "Indias cricket board has named Gautam Gambhir as head coach of the mens team, with the former opener taking over from Rahul Dravid, tasked with building on their recent World Cup triumph.\r\nIt is with… [+3264 chars]",
        },
        {
          source: {
            id: "al-jazeera-english",
            name: "Al Jazeera English",
          },
          author: null,
          title:
            "Celebrations erupt as India crowned T20 cricket world champions",
          description:
            "Cricket fans in India are in party mode after their team beat South Africa by seven runs.",
          url: "https://www.aljazeera.com/program/newsfeed/2024/6/30/celebrations-erupt-as-india-crowned-t20-cricket-world-champions",
          urlToImage:
            "https://www.aljazeera.com/wp-content/uploads/2024/06/2024-06-29T140548Z_791331676_UP1EK6T135MFS_RTRMADP_3_CRICKET-T20-IND-ZAF-REPORT-1719734589.jpg?resize=1920%2C1440",
          publishedAt: "2024-06-30T08:03:56Z",
          content:
            "NewsFeed\r\nCricket fans in India are in party mode after their team beat South Africa by seven runs at the final of the ICC Mens T20 World Cup 2024 in Barbados.",
        },
        {
          source: {
            id: null,
            name: "BBC News",
          },
          author: "Stephan Shemilt",
          title: "ECB contacts NFL owners over Hundred team sales",
          description:
            "The England and Wales Cricket Board (ECB) contact owners of teams in the NFL about potential investment in The Hundred.",
          url: "https://www.bbc.com/sport/cricket/articles/cjr4z7wyknqo",
          urlToImage:
            "https://ichef.bbci.co.uk/news/1024/branded_sport/3b68/live/ca5dc460-4824-11ef-96a8-e710c6bfc866.jpg",
          publishedAt: "2024-07-22T12:36:54Z",
          content:
            "Venky Mysore, managing director of IPL team Kolkata Knight Riders, told the BBC investors will see this as a challenge.\r\nIt is understood that at least three of the eight hosts are planning on keepin… [+1266 chars]",
        },
        {
          source: {
            id: null,
            name: "Variety",
          },
          author: "Tim Chan",
          title:
            "India vs. England Cricket World Cup Livestream: How to Watch the T20 Semifinal Online Free",
          description:
            "A spot in the championship finals is up for grabs at the 2024 T20 World Cup Thursday, as India and England face off in the second semifinal match of the cricket tournament. England faces off against India at Providence Stadium in Guyana, with the winner going…",
          url: "https://variety.com/2024/shopping/athletes/watch-india-vs-england-t20-cricket-world-cup-live-stream-online-free-1236050377/",
          urlToImage:
            "https://variety.com/wp-content/uploads/2024/06/GettyImages-2159014739.jpg?w=1000&h=563&crop=1",
          publishedAt: "2024-06-27T05:43:51Z",
          content:
            "If you purchase an independently reviewed product or service through a link on our website, Variety may receive an affiliate commission.\r\nA spot in the championship finals is up for grabs at the 2024… [+2636 chars]",
        },
        {
          source: {
            id: "al-jazeera-english",
            name: "Al Jazeera English",
          },
          author: "Kevin Hand",
          title:
            "T20 World Cup 2024 final: A look at Virat Kohli’s top limited-overs innings",
          description:
            "With questions surrounding Kohli's future in limited-overs cricket, Al Jazeera looks back at the icon's greatest knocks.",
          url: "https://www.aljazeera.com/sports/2024/6/28/t20-world-cup-final-five-of-virat-kohlis-finest-moments-for-india-cricket-south-africa",
          urlToImage:
            "https://www.aljazeera.com/wp-content/uploads/2024/06/2024-06-09T141616Z_1043656825_UP1EK6913N23S_RTRMADP_3_CRICKET-T20-IND-PAK-1719571289.jpg?resize=1920%2C1440",
          publishedAt: "2024-06-28T13:53:38Z",
          content:
            "Rohit Sharma has led Indias charge into the ICC T20 World Cup final with his role as the teams leader on the field and with the bat, but it is their former captain Virat Kohli who remains in the spot… [+5553 chars]",
        },
        {
          source: {
            id: "al-jazeera-english",
            name: "Al Jazeera English",
          },
          author: "Al Jazeera",
          title:
            "How Rob Walter helped South Africa reach the ICC T20 World Cup 2024 final",
          description:
            "After 32 years and seven failed attempts, South Africa have finally reached the promised land of a men's cricket final.",
          url: "https://www.aljazeera.com/sports/2024/6/28/how-rob-walter-helped-south-africa-reach-the-icc-t20-world-cup-2024-final",
          urlToImage:
            "https://www.aljazeera.com/wp-content/uploads/2024/01/2024-01-03T132915Z_2039852192_UP1EK1311GP2N_RTRMADP_3_CRICKET-TEST-ZAF-IND-1704295956.jpg?resize=1920%2C1440",
          publishedAt: "2024-06-28T18:57:48Z",
          content:
            "After years of suffering the pain of late tournament knockouts, South Africa stand on the brink history and glory in their first ever ICC Mens Cricket World Cup final.\r\nAnd after several terms of hig… [+5420 chars]",
        },
        {
          source: {
            id: "al-jazeera-english",
            name: "Al Jazeera English",
          },
          author: "Al Jazeera",
          title:
            "India celebrates ICC T20 World Cup 2024 triumph with trophy and fireworks",
          description:
            "As India's cricket team lifted the T20 World Cup trophy, fans back home rejoiced with celebrations of their own.",
          url: "https://www.aljazeera.com/gallery/2024/6/30/celebrations-erupt-as-india-wins-t20-cricket-world-championship",
          urlToImage:
            "https://www.aljazeera.com/wp-content/uploads/2024/06/AP24181703453378-1719693879.jpg?resize=1920%2C1440",
          publishedAt: "2024-06-30T11:03:47Z",
          content:
            "Indias T20 World Cup triumph was celebrated far and wide across the country after Rohit Sharma and his team ended the countrys global trophy drought in Barbados.\r\nVirat Kohli hit a match-winning 76 t… [+667 chars]",
        },
        {
          source: {
            id: "al-jazeera-english",
            name: "Al Jazeera English",
          },
          author: "Ahsan Iftikhar Nagi",
          title:
            "Source: Pakistan to play India in Lahore on March 1 in ICC Champions Trophy",
          description:
            "A source inside Pakistan cricket told Al Jazeera that despite the proposed date, India's participation is questionable.",
          url: "https://www.aljazeera.com/sports/2024/7/3/source-pakistan-to-play-india-in-lahore-on-march-1-in-icc-champions-trophy",
          urlToImage:
            "https://www.aljazeera.com/wp-content/uploads/2024/07/2023-10-14T000000Z_1105162650_UP1EJAE15CUA0_RTRMADP_3_CRICKET-WORLDCUP-IND-PAK-1720015287.jpg?resize=1751%2C1080",
          publishedAt: "2024-07-03T15:18:14Z",
          content:
            "The Pakistan Cricket Board (PCB) has proposed March 1 as the date for the marquee ICC Champions Trophy contest between Pakistan and India in Lahore in a revised schedule circulated to the Internation… [+3760 chars]",
        },
        {
          source: {
            id: null,
            name: "Rolling Stone",
          },
          author: "Oscar Hartzog",
          title:
            "India vs. South Africa Livestream: Watch the T20 Cricket World Cup Final Online In the US",
          description:
            "Here’s how to watch India vs. South Africa online, including how to get a free T20 final livestream without cable in the U.S.",
          url: "http://www.rollingstone.com/product-recommendations/lifestyle/how-to-watch-india-vs-south-africa-2024-cricket-world-cup-final-free-live-stream-1235050110/",
          urlToImage:
            "https://www.rollingstone.com/wp-content/uploads/2024/06/GettyImages-2159567201.jpg?w=1600&h=900&crop=1",
          publishedAt: "2024-06-28T21:56:59Z",
          content:
            "Quick Answer: Livestream the India vs. South Africa T20 World Cup final with DirecTV Stream, Sling, fubo, or Disney+ Hoststar with a VPN.\r\nThe 2024 CricketT20 World Cup has reached its final match, p… [+2630 chars]",
        },
        {
          source: {
            id: null,
            name: "CNET",
          },
          author: "Zachary McAuliffe",
          title:
            "Xbox Game Pass: Play Nickelodeon All-Star Brawl 2 and More in July",
          description:
            "Subscribers can soon do battle as SpongeBob Squarepants and Garfield, among other fan faves.",
          url: "https://www.cnet.com/tech/gaming/xbox-game-pass-play-nickelodeon-all-star-brawl-2-and-more-in-july/",
          urlToImage:
            "https://www.cnet.com/a/img/resize/4aed60787962d60e1be39213973265782e54df15/hub/2024/05/29/2993fa90-4c94-440f-b3b1-308c21e95df1/xbox-game-pass-ultimate-4.jpg?auto=webp&fit=crop&height=675&width=1200",
          publishedAt: "2024-07-02T19:34:48Z",
          content:
            "Xbox Game Pass Ultimate, a CNET Editors' Choice award pick, offers hundreds of games that you can play on your Xbox Series X, Series S, Xbox One and PC for $17 a month. A subscription gets you access… [+4072 chars]",
        },
        {
          source: {
            id: null,
            name: "BBC News",
          },
          author: "Alvin McCaig",
          title: "White excited for 'historic' first Test match in NI",
          description:
            "Andrew White is relishing this week's encounter between Ireland and Zimbabwe as Test cricket comes to Belfast for the first time.",
          url: "https://www.bbc.com/sport/cricket/articles/cn38ely7p8vo",
          urlToImage:
            "https://ichef.bbci.co.uk/news/1024/branded_sport/352c/live/d65b1d40-442c-11ef-b6ff-e7f43eb71781.jpg",
          publishedAt: "2024-07-22T06:25:10Z",
          content:
            "Craig Ervine will lead the Chevrons while Sean Williams, Tendai Chatara, Blessing Muzarabani and Richard Ngarava are also in a squad which includes four uncapped players.\r\nZimbabwe's calendar, like I… [+1039 chars]",
        },
        {
          source: {
            id: null,
            name: "BBC News",
          },
          author: "Stephan Shemilt",
          title: "Anderson to become England fast-bowling mentor",
          description:
            "James Anderson will join the England coaching set-up as a fast-bowling mentor when he retires from Test cricket against West Indies at Lord’s next week.",
          url: "https://www.bbc.com/sport/cricket/articles/cyx0gdx5zq7o",
          urlToImage:
            "https://ichef.bbci.co.uk/news/1024/branded_sport/bd39/live/9d6731f0-3797-11ef-aa0b-5761f82a603d.jpg",
          publishedAt: "2024-07-01T10:38:12Z",
          content:
            "England have named a fresh-looking squad for the first two of the three Tests against West Indies.\r\nWith Anderson due to bow out, Nottinghamshire pace bowler Dylan Pennington has been called up, alon… [+1718 chars]",
        },
        {
          source: {
            id: null,
            name: "Digital Trends",
          },
          author: "Tomas Franzese",
          title:
            "July’s Xbox Game Pass lineup is the best the service has offered in months",
          description:
            "Xbox Game Pass is getting a great batch of games in July, including a lot of indie standouts.",
          url: "https://www.digitaltrends.com/gaming/xbox-game-pass-july-games-neon-white/",
          urlToImage:
            "https://www.digitaltrends.com/wp-content/uploads/2024/07/Neon-White.jpg?resize=1200%2C630&p=1",
          publishedAt: "2024-07-02T14:58:54Z",
          content:
            "Annapurna Interactive\r\nMicrosoft unveiled the batch of eight games that will come to the Xbox Game Pass subscription service over the course of the first half of July. It’s a solid lineup featuring q… [+1813 chars]",
        },
        {
          source: {
            id: null,
            name: "ReadWrite",
          },
          author: "Alvin Hemedez",
          title:
            "Top 4 GameFi Tokens to Watch in 2024 – The Meme Games, Notcoin, Floki, and Sandbox",
          description:
            "The GameFi sector is rapidly gaining traction, blending the thrill of gaming with the potential for high financial rewards. Today,… Continue reading Top 4 GameFi Tokens to Watch in 2024 – The Meme Games, Notcoin, Floki, and Sandbox\nThe post Top 4 GameFi Token…",
          url: "https://readwrite.com/top-4-gamefi-tokens-to-watch-in-2024-the-meme-games-notcoin-floki-and-sandbox/",
          urlToImage:
            "https://readwrite.com/wp-content/uploads/2024/07/top-gamefi-tokens-to-watch.jpg",
          publishedAt: "2024-07-22T03:47:41Z",
          content:
            "The GameFi sector is rapidly gaining traction, blending the thrill of gaming with the potential for high financial rewards.\r\nToday, we’re diving into the top four GameFi coins to examine their potent… [+6210 chars]",
        },
        {
          source: {
            id: "hacker-news",
            name: "Hacker News",
          },
          author: null,
          title:
            "Ask HN: Why does no one seem to care that AI gives wrong answers?",
          description: "Comments",
          url: "https://news.ycombinator.com/item?id=40930834",
          urlToImage: null,
          publishedAt: "2024-07-10T19:54:13Z",
          content:
            "(1) Some problems are probabilistic either in theory or practice. For instance there could be a sentiment analysis problem where the state of the art was 67% accuracy 5 years ago and with an LLM it i… [+2058 chars]",
        },
        {
          source: {
            id: null,
            name: "BBC News",
          },
          author: "BBC Sport",
          title: "Jayasuriya named Sri Lanka coach for England series",
          description:
            "Sanath Jayasuriya becomes the interim Sri Lanka men's head coach following Chris Silverwood's departure in June.",
          url: "https://www.bbc.com/sport/cricket/articles/cek925x8dzeo",
          urlToImage:
            "https://ichef.bbci.co.uk/news/1024/branded_sport/add2/live/dc21f1a0-3d1e-11ef-90ff-7b1636c56d0e.jpg",
          publishedAt: "2024-07-08T11:37:44Z",
          content:
            "Sanath Jayasuriya has been appointed Sri Lanka's interim men's head coach after Chris Silverwood resigned in June.\r\nSilverwood, 49, stepped down after the team's early group-stage exit from the T20 W… [+772 chars]",
        },
        {
          source: {
            id: null,
            name: "AndroidGuys",
          },
          author: "Scott Webster",
          title:
            "Podcast: Exclusive Interview with John Dwyer, President of Cricket Wireless",
          description:
            "I recently had the privilege of interviewing John Dwyer, the president of AT&T’s Prepaid Wireless Portfolio, which consists of Cricket Wireless and AT&T Prepaid. Over the roughly 30 minute chat we discuss a number of topics including his background in wireles…",
          url: "https://androidguys.com/featured/podcast-exclusive-interview-with-john-dwyer-president-of-cricket-wireless/",
          urlToImage:
            "https://i0.wp.com/androidguys.com/wp-content/uploads/2024/06/john-dwyer.jpg?resize=1200%2C1200&ssl=1",
          publishedAt: "2024-06-28T21:15:00Z",
          content:
            "I recently had the privilege of interviewing John Dwyer, the president of AT&amp;T’s Prepaid Wireless Portfolio, which consists of Cricket Wireless and AT&amp;T Prepaid.\r\nOver the roughly 30 minute c… [+659 chars]",
        },
        {
          source: {
            id: null,
            name: "Phandroid - News for Android",
          },
          author: "Tyler Lee",
          title:
            "The 2024 Motorola Razr phones are available for pre-order today!",
          description:
            "If you’re looking for a new foldable phone that won’t break the bank, then the 2024 Motorola Razr phones are available for pre-order today.\nThe post The 2024 Motorola Razr phones are available for pre-order today! appeared first on Phandroid.",
          url: "https://phandroid.com/2024/07/10/the-2024-motorola-razr-phones-are-available-for-pre-order-today/",
          urlToImage:
            "https://phandroid.com/wp-content/uploads/2024/06/motorola-razr-2024-family.jpg",
          publishedAt: "2024-07-10T13:00:14Z",
          content:
            "Last month, Motorola announced its new 2024 Razr lineup. Both of these devices will compete with flip foldables like the Samsung Galaxy Z Flip series. But if youre more of a Motorola fan or want a ph… [+1118 chars]",
        },
        {
          source: {
            id: null,
            name: "GameSpot",
          },
          author: "Eddie Makuch",
          title: "Game Pass Adds These 8 Games In July",
          description:
            "Stocked up\r\nWith every flip of the month, Microsoft adds more titles to the Xbox Game Pass catalog, and that's no different for July.\r\nMicrosoft has announced the first set of additions to Game Pass in July, and there are eight games coming to the catalog soo…",
          url: "https://www.gamespot.com/gallery/game-pass-adds-these-8-games-in-july/2900-5561/",
          urlToImage:
            "https://www.gamespot.com/a/uploads/screen_kubrick/1179/11799911/4327963-xboxsphere.jpeg",
          publishedAt: "2024-07-02T13:10:00Z",
          content:
            "GameSpot may receive revenue from affiliate and advertising partnerships for sharing this content and from purchases through links.",
        },
        {
          source: {
            id: null,
            name: "BBC News",
          },
          author: "Stephan Shemilt",
          title: "No England captaincy ambitions 'soon', says Brook",
          description:
            "Harry Brook says he has no England captaincy ambitions “any time soon”, amid speculation over the future of the white-ball leadership.",
          url: "https://www.bbc.com/sport/cricket/articles/c8809lrj0peo",
          urlToImage:
            "https://ichef.bbci.co.uk/news/1024/branded_sport/1d78/live/bf9fa240-49ab-11ef-8957-57bc56098a6f.jpg",
          publishedAt: "2024-07-24T17:00:28Z",
          content:
            "Their next white-ball series, at home to Australia in September, begins the day after the final Test against Sri Lanka ends and runs to the time when the Test squad would depart for the tour of Pakis… [+1592 chars]",
        },
        {
          source: {
            id: null,
            name: "Faz.net",
          },
          author: "dpa",
          title: "Hurrikan „Beryl“ verursacht schwere Schäden in Karibik",
          description:
            "Der erste Hurrikan der Saison verwüstet den Südosten der Karibik. „Beryl“ erreicht die höchste Kategorie – ein so starker Atlantik-Wirbelsturm ist nie zuvor so früh im Jahr aufgezeichnet worden.",
          url: "https://www.faz.net/aktuell/gesellschaft/ungluecke/hoechste-kategorie-tropischer-wirbelsturm-beryl-fegt-durch-karibik-19827462.html",
          urlToImage:
            "https://media0.faz.net/ppmedia/aktuell/gesellschaft/2803742348/1.9827464/facebook_teaser/ein-fischer-betrachtet-die-vom.jpg",
          publishedAt: "2024-07-02T04:41:14Z",
          content:
            "Am späten Abend (Ortszeit) wurden laut NHC anhaltende Windgeschwindigkeiten von bis zu 260 Kilometern pro Stunde gemessen. Experten zufolge war im Atlantik nicht einmal ein Hurrikan der Kategorie 4 s… [+2808 chars]",
        },
        {
          source: {
            id: "al-jazeera-english",
            name: "Al Jazeera English",
          },
          author: "Al Jazeera",
          title:
            "Rohit Sharma to lead India in ICC Champions Trophy, Test Championship 2025",
          description:
            "India's T20 World Cup winning captain will stay in charge of ODI and Test teams, BCCI says.",
          url: "https://www.aljazeera.com/sports/2024/7/8/rohit-sharma-to-lead-india-in-icc-champions-trophy-test-championship-2025",
          urlToImage:
            "https://www.aljazeera.com/wp-content/uploads/2024/07/AP24181627405894-1720424614.jpg?resize=1920%2C1440",
          publishedAt: "2024-07-08T08:45:41Z",
          content:
            "Indias Rohit Sharma, who ended his T20 international career with an ICC T20 World Cup triumph, will lead the team at the ICC Champions Trophy 2025, the countrys cricket board has confirmed.\r\nRohit wi… [+2430 chars]",
        },
        {
          source: {
            id: null,
            name: "BBC News",
          },
          author: "BBC Sport",
          title: "Kimber hits England's Robinson for 43 in one over",
          description:
            "England fast bowler Ollie Robinson is hit for 43 runs in the most expensive over in the history of the County Championship.",
          url: "https://www.bbc.com/sport/cricket/articles/c4nng85x104o",
          urlToImage:
            "https://ichef.bbci.co.uk/news/1024/branded_sport/72ab/live/ea884890-33b2-11ef-bdc5-41d7421c2adf.jpg",
          publishedAt: "2024-06-26T12:06:53Z",
          content:
            "England fast bowler Ollie Robinson was hit for 43 runs in the most expensive over in the history of the County Championship.\r\nSussexs Robinson was struck for five sixes - three of which were off no-b… [+759 chars]",
        },
        {
          source: {
            id: "al-jazeera-english",
            name: "Al Jazeera English",
          },
          author: "Melinda Farrell",
          title:
            "Can India win the ICC T20 World Cup 2024 final for Virat ‘King’ Kohli?",
          description:
            "An Indian win in the final may be the perfect gift to Virat Kohli as he stands at the twilight of his World Cup career.",
          url: "https://www.aljazeera.com/sports/2024/6/29/will-india-win-the-icc-t20-world-cup-2024-and-lift-virat-king-kohli",
          urlToImage:
            "https://www.aljazeera.com/wp-content/uploads/2024/06/2011-04-02T120000Z_275502762_SR1E7421D4C0G_RTRMADP_3_CRICKET-WORLD-1719645651.jpg?resize=1920%2C1440",
          publishedAt: "2024-06-29T07:53:03Z",
          content:
            "Bridgetown, Barbados April Fools Day had come and gone. On April 2, 2011, a young and chubby star of Indian cricket uttered his most famous words on a glorious night for his country.\r\nThe then 22-yea… [+5724 chars]",
        },
        {
          source: {
            id: "time",
            name: "Time",
          },
          author: "Chad de Guzman",
          title:
            "What to Know About Nikki Hiltz and the History of Trans and Nonbinary Olympians",
          description:
            "Middle-distance runner Nikki Hiltz will represent the U.S.—and the LGBTQ community—at the Paris 2024 Olympics.",
          url: "https://time.com/6995103/nikki-hiltz-transgender-nonbinary-olympics/",
          urlToImage:
            "https://api.time.com/wp-content/uploads/2024/07/nikki-hiltz.jpg?quality=85&w=1024&h=628&crop=1",
          publishedAt: "2024-07-04T13:00:00Z",
          content:
            "Nikki Hiltz doesnt just represent the U.S. on the race track.\r\nThis is bigger than just me, the 29-year-old from California told NBC after qualifying for the Olympics on June 30 after running 1500 me… [+4472 chars]",
        },
        {
          source: {
            id: null,
            name: "Forbes",
          },
          author:
            "Sofia Chierchio, Contributor, \n Sofia Chierchio, Contributor\n https://www.forbes.com/sites/sofiachierchio/",
          title: "Meet The Billionaires Banking On An American Cricket League",
          description:
            "Microsoft CEO Satya Nadella, Reliance chairman Mukesh Ambani, and other deep-pocketed investors worth a collective $126 billion own franchises in Major League Cricket. But launching a new major sports league in the United States has long been a sticky wicket.",
          url: "https://www.forbes.com/sites/sofiachierchio/2024/07/21/meet-the-billionaires-banking-on-an-american-cricket-league/",
          urlToImage:
            "https://imageio.forbes.com/specials-images/imageserve/669984f49a85637ba792e1fd/0x0.jpg?format=jpg&crop=1920,1080,x0,y0,safe&height=900&width=1600&fit=bounds",
          publishedAt: "2024-07-21T10:00:00Z",
          content:
            "Inside a crowded cricket stadium in Bangalore, India, as the Indian Premier League prepared to begin its inaugural match in April 2008, Anurag Jain gazed at the owners balcony as a familiar Hindi son… [+5710 chars]",
        },
        {
          source: {
            id: "die-zeit",
            name: "Die Zeit",
          },
          author: "ZEIT ONLINE: News -",
          title:
            'Historischer Hurrikan: Am Rande der stärksten Kategorie: "Beryl" fegt durch Karibik',
          description:
            'Hier finden Sie Informationen zu dem Thema „Historischer Hurrikan“. Lesen Sie jetzt „Am Rande der stärksten Kategorie: "Beryl" fegt durch Karibik“.',
          url: "https://www.zeit.de/news/2024-07/02/am-rande-der-staerksten-kategorie-beryl-fegt-durch-karibik",
          urlToImage:
            "https://img.zeit.de/news/2024-07/02/am-rande-der-staerksten-kategorie-beryl-fegt-durch-karibik-image-group/wide__1300x731",
          publishedAt: "2024-07-02T02:19:45Z",
          content:
            'Der gefährlich starke Hurrikan "Beryl" hat im Südosten der Karibik schwere Schäden verursacht. Er traf am Montagvormittag (Ortszeit) als Hurrikan der Kategorie 4 über der zu Grenada gehörenden Insel … [+3905 chars]',
        },
        {
          source: {
            id: null,
            name: "Forbes",
          },
          author:
            "Tristan Lavalette, Contributor, \n Tristan Lavalette, Contributor\n https://www.forbes.com/sites/tristanlavalette/",
          title:
            "Push To Fund Afghanistan Women’s Cricket Fails To Materialize",
          description:
            "A slice of revenue won't be set aside to help resurrect Afghanistan women's cricket, as its governing body avoids sanctions to keep coveted Full Membership.",
          url: "https://www.forbes.com/sites/tristanlavalette/2024/07/23/push-to-fund-afghanistan-womens-cricket-fails-to-materialize/",
          urlToImage:
            "https://imageio.forbes.com/specials-images/imageserve/64a03dc66fefa2d4d971c2be/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
          publishedAt: "2024-07-23T04:15:06Z",
          content:
            "Afghanistan women cricketers have had to flee their country (Photo by AREF KARIMI/AFP via Getty ... [+] Images)\r\nAFP via Getty Images\r\nA slice of revenue won't be set aside to help fund Afghanistan w… [+3683 chars]",
        },
        {
          source: {
            id: null,
            name: "Forbes",
          },
          author:
            "Tristan Lavalette, Contributor, \n Tristan Lavalette, Contributor\n https://www.forbes.com/sites/tristanlavalette/",
          title:
            "Afghanistan Is A Cricket Fairytale, But Women’s Team Uncertainty Hovers",
          description:
            "Afghanistan's cricket future is a polarising issue, but the team's success at the T20 World Cup continues a remarkable rise in the sport.",
          url: "https://www.forbes.com/sites/tristanlavalette/2024/06/26/afghanistan-is-a-cricket-fairytale-but-womens-team-uncertainty-hovers/",
          urlToImage:
            "https://imageio.forbes.com/specials-images/imageserve/667bdd1552d1a2ebf514c058/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
          publishedAt: "2024-06-26T14:43:42Z",
          content:
            "Afghanistan has made the semi-finals of the T20 World Cup (Photo by Darrian Traynor-ICC/ICC via ... [+] Getty Images)\r\nICC via Getty Images\r\nPublic revelry and an outpouring of euphoria is normally f… [+3604 chars]",
        },
        {
          source: {
            id: null,
            name: "Forbes",
          },
          author:
            "Tristan Lavalette, Contributor, \n Tristan Lavalette, Contributor\n https://www.forbes.com/sites/tristanlavalette/",
          title:
            "South Africa’s Cricket Nightmares Resurface After T20 World Cup Heartbreak",
          description:
            "South Africa were so close to ending decades of misery before falling short in the T20 World Cup final in a defeat that will haunt their players.",
          url: "https://www.forbes.com/sites/tristanlavalette/2024/07/01/south-africas-cricket-nightmares-resurface-after-t20-world-cup-heartbreak/",
          urlToImage:
            "https://imageio.forbes.com/specials-images/imageserve/668154aae250df1128496001/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
          publishedAt: "2024-07-01T12:14:15Z",
          content:
            "South Africa came so close to their first World Cup title (Photo by Gareth Copley/Getty Images)\r\nGetty Images\r\nThree decades worth of nightmares for South Africa seemed set to be finally ending in th… [+5456 chars]",
        },
        {
          source: {
            id: "al-jazeera-english",
            name: "Al Jazeera English",
          },
          author: "Melinda Farrell",
          title:
            "India vs South Africa: ICC Men’s T20 World Cup 2024 final Barbados",
          description:
            "The path to the T20 World Cup final has been difficult for varying reasons for India and South Africa, but glory awaits.",
          url: "https://www.aljazeera.com/sports/2024/6/28/india-vs-south-africa-icc-mens-t20-world-cup-2024-final-barbados",
          urlToImage:
            "https://www.aljazeera.com/wp-content/uploads/2024/06/AFP__20240620__34XY4U2__v1__HighRes__CricketMenST20WorldCupSuperEightC1VA1-1719599859.jpg?resize=1920%2C1343",
          publishedAt: "2024-06-28T22:21:27Z",
          content:
            "Bridgetown, Barbados And then there were two.\r\nIndia and South Africa have made it to the T20 World Cup Final, each side undefeated through the group stage, the Super Eights and the semifinals.\r\nlist… [+7059 chars]",
        },
        {
          source: {
            id: "al-jazeera-english",
            name: "Al Jazeera English",
          },
          author: "Al Jazeera Staff",
          title:
            "Afghanistan vs South Africa – T20 World Cup semifinal: Weather, pitch, toss",
          description:
            "Afghanistan face unbeaten South Africa with 'nothing to lose' but will be eyeing more history in the T20 World Cup 2024.",
          url: "https://www.aljazeera.com/sports/2024/6/26/afghanistan-vs-south-africa-t20-world-cup-semifinal-weather-pitch-toss",
          urlToImage:
            "https://www.aljazeera.com/wp-content/uploads/2024/06/AP24175014431036-1719224216.jpg?resize=1920%2C1440",
          publishedAt: "2024-06-26T07:58:33Z",
          content:
            "Who: Afghanistan vs South AfricaWhat: ICC T20 World Cup 2024 semifinalWhen: Wednesday, June 26, 8:30pm local time (00:30 GMT, June 27)Where: Brian Lara Cricket Academy, San Fernando, Trinidad and Tob… [+6872 chars]",
        },
        {
          source: {
            id: null,
            name: "Forbes",
          },
          author:
            "Tristan Lavalette, Contributor, \n Tristan Lavalette, Contributor\n https://www.forbes.com/sites/tristanlavalette/",
          title:
            "USA Cricket Set To Be Put ‘On Notice’, While Spotlight Shines On T20 World Cup Finances",
          description:
            "USA Cricket is set to be put 'on notice', a sanction that would move the governing body closer to a suspension of its membership amid spotlight on the T20 World Cup.",
          url: "https://www.forbes.com/sites/tristanlavalette/2024/07/13/usa-cricket-set-to-be-put-on-notice-while-spotlight-shines-on-t20-world-cup-finances/",
          urlToImage:
            "https://imageio.forbes.com/specials-images/imageserve/666e55d4b65c3f0bc53f1506/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
          publishedAt: "2024-07-14T03:04:56Z",
          content:
            "The T20 World Cup leg in the U.S. will come under scruinty (Photo by Matt Roberts-ICC/ICC via Getty ... [+] Images)\r\nICC via Getty Images\r\nUSA Cricket is set to be put 'on notice' amid ongoing turmoi… [+4462 chars]",
        },
        {
          source: {
            id: null,
            name: "Forbes",
          },
          author:
            "Tristan Lavalette, Contributor, \n Tristan Lavalette, Contributor\n https://www.forbes.com/sites/tristanlavalette/",
          title:
            "America’s Major League Cricket Set To Ride Momentum Of T20 World Cup",
          description:
            "After the U.S. co-hosted a momentous T20 World Cup, hopes are high for a pivotal second season of Major League Cricket - America's well-heeled professional tournament.",
          url: "https://www.forbes.com/sites/tristanlavalette/2024/07/05/americas-major-league-cricket-set-to-ride-momentum-of-t20-world-cup/",
          urlToImage:
            "https://imageio.forbes.com/specials-images/imageserve/651451e8c86e330fa189e2e9/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
          publishedAt: "2024-07-06T03:23:59Z",
          content:
            "There is much anticipation for the second season of Major League Cricket (AP Photo/LM Otero)\r\nCopyright 2023 The Associated Press. All rights reserved.\r\nAfter a momentous T20 World Cup co-hosted by t… [+4838 chars]",
        },
        {
          source: {
            id: null,
            name: "BBC News",
          },
          author: "Stephan Shemilt",
          title: "'Goodbye to Jimmy and to part of ourselves'",
          description:
            "James Anderson has been our constant in our lives for more than 20 years, so we are not only saying goodbye to great a fast bowler, but part of ourselves, says Stephan Shemilt.",
          url: "https://www.bbc.com/sport/cricket/articles/cp4wxye715qo",
          urlToImage:
            "https://ichef.bbci.co.uk/news/1024/branded_sport/95f5/live/e3a45320-3d2b-11ef-b74c-bb483a802c97.png",
          publishedAt: "2024-07-09T05:55:37Z",
          content:
            "There are other records, too. Anderson hasn't played a one-day international for England since 2015 and is still their leading wicket-taker on 269. His 113 not-outs in Test cricket is a massive 52 mo… [+1963 chars]",
        },
        {
          source: {
            id: null,
            name: "AndroidGuys",
          },
          author: "Scott Webster",
          title:
            "Motorola Razr+ 2024 and Razr 2024: Foldable Phones Ready for Pre-Order, Unfolding Soon",
          description:
            "Motorola has opened pre-orders for its latest foldable smartphones, the motorola razr+ 2024 and motorola razr 2024. Both models will be officially available for sale starting Wednesday, July 24th. Availability and Pricing motorola razr+ 2024 In the United Sta…",
          url: "https://androidguys.com/news/motorola-razr-2024-and-razr-2024-foldable-phones-ready-for-pre-order-unfolding-soon/",
          urlToImage:
            "https://i0.wp.com/androidguys.com/wp-content/uploads/2024/07/moto_razr_fam_2024.webp?resize=1200%2C1080&ssl=1",
          publishedAt: "2024-07-10T17:09:58Z",
          content:
            "Motorola has opened pre-orders for its latest foldable smartphones, the motorola razr+ 2024 and motorola razr 2024. Both models will be officially available for sale starting Wednesday, July 24th.\r\nI… [+1489 chars]",
        },
        {
          source: {
            id: null,
            name: "Forbes",
          },
          author:
            "Tristan Lavalette, Contributor, \n Tristan Lavalette, Contributor\n https://www.forbes.com/sites/tristanlavalette/",
          title:
            "ICC’s AGM: T20 World Cup Finances, USA Cricket Spotlight And Test’s Future",
          description:
            "The International Cricket Council's series of meetings has started with a number of pressing issues expected to be debated by the sport's powerbrokers.",
          url: "https://www.forbes.com/sites/tristanlavalette/2024/07/19/iccs-agm-t20-world-cup-finances-usa-cricket-spotlight-and-tests-future/",
          urlToImage:
            "https://imageio.forbes.com/specials-images/imageserve/6699c3f04c1255a351a51fbc/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
          publishedAt: "2024-07-19T07:10:52Z",
          content:
            "The T20 World Cup held in the U.S. will be a talking point at the AGM (Photo by Matt Roberts-ICC/ICC ... [+] via Getty Images)\r\nICC via Getty Images\r\nThe International Cricket Council's series of mee… [+9039 chars]",
        },
        {
          source: {
            id: null,
            name: "taz.de",
          },
          author: "Natalie Mayroth",
          title: "T20-Cricket-WM in Indien: Euphorie in Mumbais Straßen",
          description:
            "Halb Mumbai feiert ausgelassen den Sieg der indischen Mannschaft bei der T20-Cricket-Weltmeisterschaft. Sogar der Monsunregen ließ etwas nach.",
          url: "https://taz.de/T20-Cricket-WM-in-Indien/!6019109/",
          urlToImage: "https://taz.de/picture/7104113/948/35734618-1.jpeg",
          publishedAt: "2024-07-07T06:31:00Z",
          content:
            "Halb Mumbai feiert ausgelassen den Sieg der indischen Mannschaft bei der T20-Cricket-Weltmeisterschaft. Sogar der Monsunregen ließ etwas nach.\r\nAußer Rand und Band: begeisterte Fans feiern die indisc… [+3992 chars]",
        },
        {
          source: {
            id: null,
            name: "Forbes",
          },
          author:
            "Tristan Lavalette, Contributor, \n Tristan Lavalette, Contributor\n https://www.forbes.com/sites/tristanlavalette/",
          title:
            "Inquiry Set To Be Launched Into Costs For U.S. Leg Of T20 Cricket World Cup",
          description:
            "An inquiry is set to be established to examine whether there was a cost blowout for the U.S. leg of June's T20 World Cup.",
          url: "https://www.forbes.com/sites/tristanlavalette/2024/07/22/inquiry-set-to-be-launched-into-costs-for-us-leg-of-t20-cricket-world-cup/",
          urlToImage:
            "https://imageio.forbes.com/specials-images/imageserve/669dcc3932e60c63b23db429/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
          publishedAt: "2024-07-22T04:20:28Z",
          content:
            "The New York stadium built for the T20 World Cup was pegged at $30 million (Photo by Robert ... [+] Cianflone/Getty Images)\r\nGetty Images\r\nAn inquiry is set to be established to examine whether there… [+3612 chars]",
        },
        {
          source: {
            id: null,
            name: "Sky Sports",
          },
          author: null,
          title: "UEFA to investigate Bellingham gesture against Slovakia",
          description:
            "UEFA will investigate a gesture made by Jude Bellingham following his goal for England against Slovakia on Sunday.",
          url: "https://www.skysports.com/football/news/11095/13161910/jude-bellingham-uefa-to-investigate-gesture-made-by-england-midfielder-after-goal-against-slovakia",
          urlToImage:
            "https://e0.365dm.com/24/06/1600x900/skysports-jude-bellingham-england_6583688.jpg?20240617094027",
          publishedAt: "2024-07-01T14:12:00Z",
          content:
            "UEFA will investigate a gesture made by Jude Bellingham following his goal for England against Slovakia on Sunday.\r\nMore to follow...\r\nThis is a breaking [insert team, sportsperson, league, sport] ne… [+813 chars]",
        },
        {
          source: {
            id: null,
            name: "Forbes",
          },
          author:
            "Kieran Meadows, Forbes Staff, \n Kieran Meadows, Forbes Staff\n https://www.forbes.com/sites/kieranmeadows/",
          title:
            "Rajasthan Royals Owner Manoj Badale On The Future Of The IPL And Cricket",
          description:
            "Forbes' Mike Ozanian sits down with the Indian Premier League team Rajasthan Royals owner Manoj Badale to discuss the future of cricket.",
          url: "https://www.forbes.com/video/1255556d-490d-4677-a686-579ab0a4bdb3/rajasthan-royals-owner-manoj-badale-on-the-future-of-the-ipl-and-cricket/",
          urlToImage:
            "https://imageio.forbes.com/i-forbesimg/media/video/2024/06/26/1255556d-490d-4677-a686-579ab0a4bdb3_thumb.jpg?format=jpg&height=460&width=800&fit=bounds",
          publishedAt: "2024-06-26T19:44:13Z",
          content:
            "Forbes' Mike Ozanian sits down with the Indian Premier League team Rajasthan Royals owner Manoj Badale to discuss the future of cricket.",
        },
        {
          source: {
            id: null,
            name: "Forbes",
          },
          author:
            "Tristan Lavalette, Contributor, \n Tristan Lavalette, Contributor\n https://www.forbes.com/sites/tristanlavalette/",
          title:
            "Jay Shah’s Big Decision Hovers Over Cricket’s Associate Member Directors Election",
          description:
            "India boss Jay Shah's expected ascension to the chair of the International Cricket Council has loomed large over an important Associate Member Directors election.",
          url: "https://www.forbes.com/sites/tristanlavalette/2024/07/17/jay-shahs-big-decision-hovers-over-crickets-associate-member-directors-election/",
          urlToImage:
            "https://imageio.forbes.com/specials-images/imageserve/6697298a21cecb930046d29f/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
          publishedAt: "2024-07-17T07:51:30Z",
          content:
            "There is uncertainty over whether Jay Shah will run for chair (Photo by Gareth Copley/Getty Images)\r\nGetty Images\r\nIndia boss Jay Shah's expected ascension to the chair of the International Cricket C… [+3675 chars]",
        },
        {
          source: {
            id: null,
            name: "Forbes",
          },
          author:
            "Tristan Lavalette, Contributor, \n Tristan Lavalette, Contributor\n https://www.forbes.com/sites/tristanlavalette/",
          title:
            "Changes On Cricket’s All-Powerful Board, As Jay Shah Eyes The Chair",
          description:
            "With India boss Jay Shah expected to take the reins of world cricket, the all-powerful ICC board has had a shake up after the Associate Member Directors election.",
          url: "https://www.forbes.com/sites/tristanlavalette/2024/07/19/changes-on-crickets-all-powerful-board-as-jay-shah-eyes-the-chair/",
          urlToImage:
            "https://imageio.forbes.com/specials-images/imageserve/5fbdd9818515b77c4549335b/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
          publishedAt: "2024-07-19T04:53:10Z",
          content:
            "Imran Khwaja (R) has been re-elected to the ICC board (Photo by Francois Nel/Getty Images)\r\nGetty Images\r\nWith India boss Jay Shah expected to take the reins of world cricket, the all-powerful Intern… [+2077 chars]",
        },
        {
          source: {
            id: null,
            name: "Sky Sports",
          },
          author: null,
          title: "England star Bronze to leave Barcelona",
          description:
            "England defender Lucy Bronze will leave Barcelona on a free transfer when her contract expires next week.",
          url: "https://www.skysports.com/football/news/11095/13159761/lucy-bronze-england-international-defender-to-leave-barcelona-after-two-years-in-spain",
          urlToImage:
            "https://e0.365dm.com/24/06/1600x900/skysports-bronze-barcelona_6592223.jpg?20240627094011",
          publishedAt: "2024-06-27T08:37:00Z",
          content:
            "England defender Lucy Bronze will leave Barcelona on a free transfer when her contract expires next week.\r\nMore to follow...\r\nThis is a breaking news story that is being updated and more details will… [+761 chars]",
        },
        {
          source: {
            id: null,
            name: "Windows Central",
          },
          author: "samuelwtolbert@gmail.com (Samuel Tolbert)",
          title:
            "The Case of the Golden Idol, Magical Delicacy, Neon White, and more are coming to Xbox Game Pass",
          description:
            "Ready for more games?&#xA0;A new month brings a new batch of titles announced for Microsoft&apos;s Xbox Game Pass subscription service. For July 2024, the first wave of additions includes some critica",
          url: "https://www.windowscentral.com/gaming/xbox/the-case-of-the-golden-idol-magical-delicacy-neon-white-and-more-are-coming-to-xbox-game-pass",
          urlToImage:
            "https://cdn.mos.cms.futurecdn.net/p2sZmhwjMEUkG7YmVNKWed-1200-80.jpg",
          publishedAt: "2024-07-02T13:56:46Z",
          content:
            "What you need to know\r\n\u003Cul\u003E\u003Cli\u003ESeveral more games are headed to Xbox Game Pass across the next couple of weeks.\u003C/li\u003E\u003Cli\u003EThis latest batch of titles includes critically acclaimed puzzle adventure The … [+3245 chars]",
        },
        {
          source: {
            id: null,
            name: "Xataka Android",
          },
          author: "Pepu Ricca",
          title:
            "Si te gustan los deportes, esta app es buenísima para seguir todos los resultados en tiempo real",
          description:
            "Ejercitar nuestro cuerpo es más fácil gracias a aplicaciones para Android que nos permiten hacer gimnasia tanto fuera de casa como dentro de ella. Hay quienes utilizan ChatGPT para diseñar planes de entrenamiento. Sin embargo, cuando se trata seguir el deport…",
          url: "https://www.xatakandroid.com/aplicaciones-android/te-gustan-deportes-esta-app-buenisima-para-seguir-todos-resultados-tiempo-real",
          urlToImage: "https://i.blogs.es/f977c1/flashscore/840_560.jpeg",
          publishedAt: "2024-07-25T16:01:47Z",
          content:
            "Ejercitar nuestro cuerpo es más fácil gracias a aplicaciones para Android que nos permiten hacer gimnasia tanto fuera de casa como dentro de ella. Hay quienes utilizan ChatGPT para diseñar planes de … [+2337 chars]",
        },
        {
          source: {
            id: null,
            name: "Forbes",
          },
          author:
            "Tim Ellis, Contributor, \n Tim Ellis, Contributor\n https://www.forbes.com/sites/timellis/",
          title:
            "England’s Cricket Test Is Against The West Indies, Wimbledon And Euros",
          description:
            "England's Test team return against the West Indies at Lord's this week. They are bottom of the Test Championship and fighting other summer sports for attention.",
          url: "https://www.forbes.com/sites/timellis/2024/07/08/englands-cricket-test-is-against-the-west-indies-wimbledon-and-euros/",
          urlToImage:
            "https://imageio.forbes.com/specials-images/imageserve/668c6fd781931655317a8b6e/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
          publishedAt: "2024-07-08T23:21:05Z",
          content:
            "Sachin Tendulkar, right, and Ben Stokes wait on Centre Court for the third round match match between ... [+] Cameron Norrie of Britain and Alexander Zverev of Germany to begin at the Wimbledon tennis… [+5186 chars]",
        },
        {
          source: {
            id: null,
            name: "Tinhte.vn",
          },
          author: "no-reply@tinhte.vn (Nam Air), Nam Air",
          title:
            "Cricket Ấn Độ IPL : chú dế tí hon trị giá $10.7 tỷ; mỗi trận đấu $84 triệu",
          description:
            "Được thành lập năm 2007 bởi BCCI (Board of Control for Cricket in India), giải Cricket Ngoại hạng Ấn Độ (Indian Premier League - IPL) chỉ có 10 đội tham gia nhưng đến nay đã đạt giá trị 10.7 tỷ USD vào năm 2023…",
          url: "https://tinhte.vn/thread/cricket-an-do-ipl-chu-de-ti-hon-tri-gia-10-7-ty-moi-tran-dau-84-trieu.3790823/",
          urlToImage:
            "https://photo2.tinhte.vn/data/attachment-files/2024/05/8345337_cover.jpeg",
          publishedAt: "2024-07-14T06:38:44Z",
          content:
            "c bit, BCCI ã cht c giá bán bn quyn phát sóng IPL cho giai on 2023 - 2027 là 6.2 t USD/nm, ngha là 5 nm này thu v 31 t ô la tin phát sóng. Vi giá 6.2 t ô la cho 74 trn thi u kéo dài 65 ngày, mi trn u… [+1634 chars]",
        },
        {
          source: {
            id: null,
            name: "Forbes",
          },
          author:
            "Tristan Lavalette, Contributor, \n Tristan Lavalette, Contributor\n https://www.forbes.com/sites/tristanlavalette/",
          title:
            "India End Cricket Curse After Beating South Africa To Win T20 World Cup",
          description:
            "Cricket's most baffling curse is over, with India - the sport's powerhouse on-and-off the field - ending a long drought after winning the T20 World Cup",
          url: "https://www.forbes.com/sites/tristanlavalette/2024/06/29/india-end-cricket-curse-after-beating-south-africa-to-win-t20-world-cup/",
          urlToImage:
            "https://imageio.forbes.com/specials-images/imageserve/66805329641a6b59f8d98463/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
          publishedAt: "2024-06-29T18:48:30Z",
          content:
            "Hardik Pandya celebrates with teammate Virat Kohli (Photo by CHANDAN KHANNA/AFP via Getty Images)\r\nAFP via Getty Images\r\nRohit Sharma lay on the field and punched the Kensington Oval turf several tim… [+4952 chars]",
        },
        {
          source: {
            id: null,
            name: "BBC News",
          },
          author: "Stephan Shemilt",
          title: "England to call up Surrey's Smith as wicketkeeper",
          description:
            "England are set to hand a debut to Surrey's Jamie Smith when they name the squad for the first Test against West Indies on Sunday.",
          url: "https://www.bbc.com/sport/cricket/articles/c4ng9vw7w57o",
          urlToImage:
            "https://ichef.bbci.co.uk/news/1024/branded_sport/4ad3/live/47f47f30-361a-11ef-b40f-797c4dd08441.jpg",
          publishedAt: "2024-06-29T14:05:33Z",
          content:
            "England are set to hand a debut to Surrey's Jamie Smith - picking him ahead of Jonny Bairstow and Ben Foakes - when they name the squad for the first Test against West Indies on Sunday.\r\nAs reported … [+1036 chars]",
        },
        {
          source: {
            id: null,
            name: "Tomshw.it",
          },
          author: "Andrea Riviera",
          title:
            "Xbox Game Pass, ecco i primi giochi di luglio (c'è un giocone da non perdere)",
          description:
            "Il Xbox Game Pass si arricchisce di nuove entusiasmanti aggiunte per questo luglio 2024. Sia gli abbonati attuali che i nuovi utenti troveranno una lineup impressionante di giochi pronti a rendere l'e...",
          url: "https://www.tomshw.it/videogioco/xbox-game-pass-rivela-i-nuovi-giochi-gratuiti-di-luglio-2024-07-02",
          urlToImage:
            "https://www.tomshw.it/storage/media/2024/07/26485/Neon-White.jpg",
          publishedAt: "2024-07-02T14:20:19Z",
          content:
            "Il Xbox Game Pass si arricchisce di nuove entusiasmanti aggiunte per questo luglio 2024. Sia gli abbonati attuali che i nuovi utenti troveranno una lineup impressionante di giochi pronti a rendere l'… [+1395 chars]",
        },
        {
          source: {
            id: null,
            name: "BBC News",
          },
          author: "Stephan Shemilt",
          title: "Pace bowler Atkinson to make England Test debut",
          description:
            "Pace bowler Gus Atkinson will make his Test debut in England's series opener against West Indies at Lord's on Wednesday.",
          url: "https://www.bbc.com/sport/cricket/articles/cx927zepyz5o",
          urlToImage:
            "https://ichef.bbci.co.uk/news/1024/branded_sport/d4be/live/973e41b0-3d37-11ef-b4a6-3b1b50d91225.jpg",
          publishedAt: "2024-07-08T15:04:37Z",
          content:
            "Overall, England have a fresh look for the first Test in the three-match series against the Windies.\r\nThere are four changes from the side heavily beaten in the final Test of the 4-1 series defeat in… [+869 chars]",
        },
        {
          source: {
            id: null,
            name: "Journal du geek",
          },
          author: "Arthur Nicolle",
          title:
            "Xbox Game Pass juillet : une sélection plus discrète mais pas moins alléchante",
          description:
            "La formule d'abonnement préférée des gamers poursuit l'été avec de nouvelles additions indés à ne pas manquer.",
          url: "https://www.journaldugeek.com/2024/07/03/xbox-game-pass-juillet-une-selection-plus-discrete-mais-pas-moins-allechante/",
          urlToImage:
            "https://www.journaldugeek.com/app/uploads/2024/03/xbox-game-pass-challenge.jpg",
          publishedAt: "2024-07-03T05:06:19Z",
          content:
            "Après un mois de juin chargé en blockbusters, le Xbox Game Pass invite ses joueurs à profiter de sessions de jeu un peu plus calmes. Si vous avez déjà eu le temps de profiter des RPG Octopath Travele… [+2927 chars]",
        },
        {
          source: {
            id: null,
            name: "BBC News",
          },
          author: "Matthew Henry",
          title: "India beat South Africa in thriller to win T20 title",
          description:
            "India end their 13-year wait for a world title by fighting back for a thrilling seven-run win over South Africa in the T20 World Cup final.",
          url: "https://www.bbc.com/sport/cricket/articles/cye0g5l2d5xo",
          urlToImage:
            "https://ichef.bbci.co.uk/news/1024/branded_sport/457c/live/d92dd0c0-3640-11ef-bdc5-41d7421c2adf.jpg",
          publishedAt: "2024-06-29T18:15:04Z",
          content:
            "In the end Hardik was in tears.\r\nHe was part of the India side that lost the 50-over World Cup final to Australia on home soil eight months ago. This was their glorious redemption in the Caribbean.\r\n… [+857 chars]",
        },
        {
          source: {
            id: null,
            name: "BBC News",
          },
          author: "Gareth Griffiths",
          title: "Wales aim to end 55 years of hurt in Australia",
          description:
            "Warren Gatland's side might have lost their last seven Test matches but Welsh woes in Australia stretch back to 1969.",
          url: "https://www.bbc.com/sport/rugby-union/articles/c147gj8wzd8o",
          urlToImage:
            "https://ichef.bbci.co.uk/news/1024/branded_sport/802f/live/cfbb81a0-352c-11ef-8d9b-696600cc4e6c.jpg",
          publishedAt: "2024-07-01T03:54:48Z",
          content:
            "Wales have arrived in Australia looking to banish 55 years of hurt.\r\nWarren Gatland's side face the Wallabies over two Tests, beginning on 6 July in Sydney, and then a week later in Melbourne, before… [+1220 chars]",
        },
        {
          source: {
            id: null,
            name: "BBC News",
          },
          author: null,
          title: "Meet the tycoons behind the grand Indian wedding",
          description:
            "For Mukesh Ambani, his son's wedding is not just a wedding - it's a display of his clout and power.",
          url: "https://www.bbc.com/news/articles/c51yp353g0ro",
          urlToImage:
            "https://ichef.bbci.co.uk/news/1024/branded_news/126c/live/99194730-4040-11ef-96a8-e710c6bfc866.jpg",
          publishedAt: "2024-07-13T01:07:24Z",
          content:
            "By Nikhil Inamdar, BBC Business correspondent\r\nThe Ambanis are often described as Indias most prominent business family\r\nFor the last few months, Asias richest man Mukesh Ambani has been grabbing the… [+5882 chars]",
        },
        {
          source: {
            id: null,
            name: "BBC News",
          },
          author: "BBC Sport",
          title: "Gambhir named India head coach",
          description:
            "India appoint their former opening batter Gautam Gambhir as new head coach.",
          url: "https://www.bbc.com/sport/cricket/articles/c897jy08091o",
          urlToImage:
            "https://ichef.bbci.co.uk/news/1024/branded_sport/2c63/live/278d5910-3e08-11ef-b29d-61ef83ddf068.jpg",
          publishedAt: "2024-07-09T15:49:46Z",
          content:
            "India have appointed former opening batter Gautam Gambhir as their new head coach.\r\nGambhir succeeds former team-mate Rahul Dravid, who stood down after his contract expired following India's victori… [+1152 chars]",
        },
        {
          source: {
            id: null,
            name: "Cracked.com",
          },
          author: "Keegan Kelly",
          title:
            "Rob McElhenney’s ‘Welcome to Wrexham’ Quadruples ‘It’s Always Sunny in Philadelphia’s All-Time Emmy Nominations in Just Two Seasons",
          description:
            "With six nominations this year alone, ‘Welcome to Wrexham’ crushes ‘Always Sunny’s all-time mark",
          url: "https://www.cracked.com/article_42933_rob-mcelhenneys-welcome-to-wrexham-quadruples-its-always-sunny-in-philadelphias-all-time-emmy-nominations-in-just-two-seasons.html",
          urlToImage:
            "https://s3.crackedcdn.com/phpimages/article/3/7/6/1118376.jpg",
          publishedAt: "2024-07-19T23:30:00Z",
          content:
            "I guess soccer bars win awards.\r\nDon't Miss\r\nEvery Its Always Sunny in Philadelphia fan knows that, in a series about the worst people imaginable, the biggest asshole of all is the entire Emmy voting… [+2335 chars]",
        },
        {
          source: {
            id: null,
            name: "BBC News",
          },
          author: "Stephan Shemilt",
          title: "Hodge hundred rallies Windies and defies England",
          description:
            "Kavem Hodge’s maiden century rallies West Indies and defies England on a compelling second day of the second Test at Trent Bridge.",
          url: "https://www.bbc.com/sport/cricket/articles/cv2gj99gn72o",
          urlToImage:
            "https://ichef.bbci.co.uk/news/1024/branded_sport/80ee/live/bcf80030-45ed-11ef-9e1c-3b4a473456a6.jpg",
          publishedAt: "2024-07-19T17:48:01Z",
          content:
            "With Trent Bridge sparkling in some long-awaited sunshine, this was a heartening day of Test cricket, as West Indies displayed the sort of spirit and skill that saw them triumph over Australia in Bri… [+1225 chars]",
        },
        {
          source: {
            id: null,
            name: "Designyoutrust.com",
          },
          author: "Dmitry",
          title:
            "Amazing Winning Photos Of The 2024 World Sports Photography Awards",
          description:
            "Football Winner: “Cristiano Ronaldo Odyssey” by Marcelo Guelber Goes The 2024 World Sports Photography Awards have highlighted the incredible talent of photographers worldwide, presenting 24 stunning category-winning photos that capture the essence of sports …",
          url: "https://designyoutrust.com/2024/07/amazing-winning-photos-of-the-2024-world-sports-photography-awards/",
          urlToImage:
            "https://designyoutrust.com/wp-content/uploads/2024/07/world-sports-photography-awards-2024-05.jpg",
          publishedAt: "2024-07-04T21:03:53Z",
          content:
            "Football Winner: Cristiano Ronaldo Odyssey by Marcelo Guelber Goes\r\nThe 2024 World Sports Photography Awards have highlighted the incredible talent of photographers worldwide, presenting 24 stunning … [+1599 chars]",
        },
        {
          source: {
            id: null,
            name: "Sky Sports",
          },
          author: null,
          title: "Bronze joins Chelsea Women",
          description:
            "Chelsea Women have announced the signing of England right-back Lucy Bronze following the expiry of her Barcelona contract.",
          url: "https://www.skysports.com/football/news/11095/13162574/lucy-bronze-chelsea-sign-england-defender-after-barcelona-departure",
          urlToImage:
            "https://e0.365dm.com/24/06/1600x900/skysports-bronze-barcelona_6592223.jpg?20240627094011",
          publishedAt: "2024-07-17T09:00:00Z",
          content:
            "Chelsea Women have announced the signing of England right-back Lucy Bronze following the expiry of her Barcelona contract.\r\nBronze departed the Spanish side in June having helped them win a second co… [+1328 chars]",
        },
        {
          source: {
            id: null,
            name: "PetaPixel",
          },
          author: "Matt Growcoot",
          title:
            "Meta is ‘Evaluating’ After Backlash Against Instagram’s ‘Made With AI’ Tags",
          description:
            'With growing fury against its hamfisted approach to labeling photos as "Made with AI", Meta says it is "evaluating" its approach.\n[Read More]',
          url: "https://petapixel.com/2024/06/27/meta-is-evaluating-after-backlash-against-instagrams-made-with-ai-tags/",
          urlToImage:
            "https://petapixel.com/assets/uploads/2024/06/meta-lawsuit-hacked-lost-accounts-small-claims-courts-.jpg",
          publishedAt: "2024-06-27T10:54:06Z",
          content:
            "With growing fury against its hamfisted approach to labeling photos as “Made with AI”, Meta says it is “evaluating” its approach. \r\nA spate of confusing labels have been attached to genuine photos re… [+2109 chars]",
        },
        {
          source: {
            id: null,
            name: "Sky Sports",
          },
          author: null,
          title: "Chelsea sign Aston Villa teenager Kellyman",
          description:
            "Chelsea have signed 18-year-old attacking midfielder Omari Kellyman from Aston Villa.",
          url: "https://www.skysports.com/transfer/news/12691/13157498/transfer-news-chelsea-sign-aston-villa-teenager-omari-kellyman",
          urlToImage:
            "https://e0.365dm.com/24/06/1600x900/skysports-omari-kellyman-chelsea_6588833.jpg?20240623111102",
          publishedAt: "2024-06-29T09:00:00Z",
          content:
            "Chelsea have signed 18-year-old attacking midfielder Omari Kellyman from Aston Villa.\r\nThe teenager made six first-team appearances at Villa Park and is an England U19 international.\r\nMore to follow.… [+879 chars]",
        },
        {
          source: {
            id: null,
            name: "Forbes",
          },
          author:
            "Danielle Chemtob, Forbes Staff, \n Danielle Chemtob, Forbes Staff\n https://www.forbes.com/sites/daniellechemtob/",
          title:
            "Forbes Daily: Seismic 2024 Election Shift As Biden Passes Torch To Harris",
          description:
            "Monday’s edition of Forbes Daily covers Biden’s unprecedented election decision, Democrats lining up behind Kamala Harris, fallout from the CrowdStrike outage and more.",
          url: "https://www.forbes.com/sites/daniellechemtob/2024/07/22/forbes-daily-seismic-2024-election-shift-as-biden-passes-torch-to-harris/",
          urlToImage:
            "https://imageio.forbes.com/specials-images/imageserve/669e44b25874017e1c9a852d/0x0.jpg?format=jpg&crop=3224,1815,x0,y0,safe&height=900&width=1600&fit=bounds",
          publishedAt: "2024-07-22T12:18:31Z",
          content:
            "This is a published version of the Forbes Daily newsletter, you can sign-up to get Forbes Daily in your inbox here.\r\nGood morning,\r\nSam Altmans OpenAI jumpstarted the AI hype cycle with ChatGPT, but … [+9910 chars]",
        },
        {
          source: {
            id: null,
            name: "Vida Extra",
          },
          author: "Sergio Cejas (Beld)",
          title:
            "Xbox Game Pass: confirmados los ocho juegos de la primera mitad de julio y los cinco que se irán del catálogo",
          description:
            "Acaba de empezar un nuevo mes y eso implica que Microsoft ha vuelto a la carga con su anuncio de dar a conocer los próximos videojuegos que pasarán a formar parte del catálogo de Xbox Game Pass. Un total de ocho títulos que empezarán a llegar poco a poco a pa…",
          url: "https://www.vidaextra.com/xbox-series/xbox-game-pass-confirmados-ocho-juegos-primera-mitad-julio-cinco-que-se-iran-catalogo",
          urlToImage:
            "https://i.blogs.es/1bac02/journey-to-the-savage-planet/840_560.jpeg",
          publishedAt: "2024-07-02T13:48:59Z",
          content:
            "Acaba de empezar un nuevo mes y eso implica que Microsoft ha vuelto a la carga con su anuncio de dar a conocer los próximos videojuegos que pasarán a formar parte del catálogo de Xbox Game Pass. Un t… [+1831 chars]",
        },
        {
          source: {
            id: null,
            name: "Sky Sports",
          },
          author: null,
          title: "Bellingham cleared to play England's Euro 2024 quarter-final",
          description:
            "Jude Bellingham has been cleared to play in England's Euro 2024 quarter-final against Switzerland by UEFA.",
          url: "https://www.skysports.com/football/news/11095/13162212/jude-bellingham-england-midfielder-cleared-to-play-euro-2024-quarter-final-vs-switzerland",
          urlToImage:
            "https://e0.365dm.com/24/06/1600x900/skysports-jude-bellingham-england_6595397.jpg?20240630191733",
          publishedAt: "2024-07-05T10:44:00Z",
          content:
            "Jude Bellingham has been cleared to play in England's Euro 2024 quarter-final against Switzerland by UEFA.\r\nThe England midfielder, who scored a sensational bicycle kick in the last-16 victory over S… [+1195 chars]",
        },
        {
          source: {
            id: null,
            name: "BBC News",
          },
          author: "Gareth Griffiths",
          title: "Botham aims to continue family success in Melbourne",
          description:
            "Wales flanker James Botham is used to being bowled questions about his famous cricketing grandfather over the years, but is forging his own sporting path.",
          url: "https://www.bbc.com/sport/rugby-union/articles/c80xv2xjg4lo",
          urlToImage:
            "https://ichef.bbci.co.uk/news/1024/branded_sport/69f8/live/61c7a3f0-4011-11ef-95e5-ad38990d3b61.png",
          publishedAt: "2024-07-12T17:00:13Z",
          content:
            "Wales will hope Botham can make the same Melbourne impact as his famous grandfather did 38 years ago in the 1986 Boxing Day Ashes Test.\r\nBotham's five-wicket first-innings haul across the road at the… [+1544 chars]",
        },
        {
          source: {
            id: null,
            name: "BBC News",
          },
          author: "BBC Sport",
          title: "Boycott reveals second cancer diagnosis",
          description:
            "Former England captain Sir Geoffrey Boycott has been diagnosed with throat cancer for the second time and will have surgery.",
          url: "https://www.bbc.com/sport/cricket/articles/c880vdrygl0o",
          urlToImage:
            "https://ichef.bbci.co.uk/news/1024/branded_sport/3101/live/a0c49340-3893-11ef-b612-21c9c8956b53.jpg",
          publishedAt: "2024-07-02T18:55:25Z",
          content:
            "Former England captain Sir Geoffrey Boycott has been diagnosed with throat cancer for the second time and will have surgery.\r\nBoycott, 83, was told last week the cancer had returned, having been trea… [+1359 chars]",
        },
        {
          source: {
            id: null,
            name: "Forbes",
          },
          author:
            "Tim Ellis, Contributor, \n Tim Ellis, Contributor\n https://www.forbes.com/sites/timellis/",
          title:
            "West Indies Can’t Stand The Test Of Time In Series Against England",
          description:
            "The West Indies are facing a Test series whitewash against England at Edgbaston. The Caribbean team show the same flaws that have haunted them for the last 25 years.",
          url: "https://www.forbes.com/sites/timellis/2024/07/25/west-indies-cant-stand-the-test-of-time-in-series-with-england/",
          urlToImage:
            "https://imageio.forbes.com/specials-images/imageserve/66a15ad6969efb3b09fe218b/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
          publishedAt: "2024-07-25T13:59:42Z",
          content:
            "NOTTINGHAM, ENGLAND - JULY 19: Kavem Hodge of West Indies celebrates on reaching his century during ... [+] day two of the 2nd Rothesay Test Match between England and West Indies at Trent Bridge on J… [+5477 chars]",
        },
        {
          source: {
            id: null,
            name: "Neowin",
          },
          author: "John Callaham",
          title:
            "Nvidia GeForce NOW adds three more PC games to its cloud gaming service",
          description:
            "This week, the Nvidia GeForce NOW PC cloud gaming service adds three more titles. They include the survival game Once Human, the different first-person action game Anger Foot, and Cricket 24. Read more...",
          url: "https://www.neowin.net/news/nvidia-geforce-now-adds-three-more-pc-games-to-its-cloud-gaming-service/",
          urlToImage:
            "https://cdn.neowin.com/news/images/uploaded/2024/06/1719506038_once_story.jpg",
          publishedAt: "2024-07-11T13:32:01Z",
          content:
            "Subscribers to the Nvidia GeForce NOW cloud gaming service are getting three new titles to stream to their devices this week. The biggest release is Once Human, the survival game from developer Starr… [+1676 chars]",
        },
        {
          source: {
            id: null,
            name: "Sky Sports",
          },
          author: null,
          title: "Chelsea Women close to signing Bronze",
          description:
            "Chelsea Women are closing in on a deal for England right-back Lucy Bronze following the expiry of her Barcelona contract.",
          url: "https://www.skysports.com/football/news/11095/13162714/lucy-bronze-chelsea-close-in-on-england-defender-following-expiration-of-barcelona-contract",
          urlToImage:
            "https://e0.365dm.com/24/06/1600x900/skysports-bronze-barcelona_6592223.jpg?20240627094011",
          publishedAt: "2024-07-03T07:15:00Z",
          content:
            "Chelsea Women are closing in on a deal for England right-back Lucy Bronze following the expiry of her Barcelona contract.\r\nBronze departed Barca in June having helped them win a second consecutive Ch… [+1400 chars]",
        },
        {
          source: {
            id: null,
            name: "Sky Sports",
          },
          author: null,
          title: "Bayern agree deal to sign Fulham's Palhinha",
          description:
            "Bayern Munich have agreed a deal to sign Fulham midfielder Joao Palhinha for a fee worth up to £47.4m.",
          url: "https://www.skysports.com/football/news/11095/13162848/joao-palhinha-bayern-munich-agree-deal-for-fulham-midfielder-worth-gbp47-4m",
          urlToImage:
            "https://e0.365dm.com/24/03/1600x900/skysports-premier-league-fulham_6505417.jpg?20240330162529",
          publishedAt: "2024-07-03T11:37:00Z",
          content:
            "Bayern Munich have agreed a deal to sign Fulham midfielder Joao Palhinha for a fee worth up to £47.4m. \r\nBayern will initially pay Fulham £43.2m for the Portugal midfielder, with an additional £4.2m … [+1393 chars]",
        },
        {
          source: {
            id: null,
            name: "Courrier International",
          },
          author: null,
          title:
            "L’Inde célèbre sa “victoire écrasante” à la Coupe du monde de cricket",
          description:
            "L’équipe indienne s’est imposée face à l’Afrique du Sud, samedi 29 juin, offrant “à l’Inde l’un de ses moments de cricket les plus joyeux”, salue le “Times of India”. La presse locale et internationale ne tarit pas d’éloges au sujet des joueurs, érigés au ran…",
          url: "https://www.courrierinternational.com/article/sport-l-inde-celebre-sa-victoire-ecrasante-a-la-coupe-du-monde-de-cricket",
          urlToImage:
            "https://focus.courrierinternational.com/2024/07/01/0/0/7191/4794/1200/630/60/0/64d4936_1719839345664-020-2159845100.jpg",
          publishedAt: "2024-07-01T13:54:59Z",
          content:
            "Samedi 29 juin, lInde a remporté la Coupe du monde de cricket. Cette victoire, qui lui échappait depuis de nombreuses années, confirme le poids décisif quexerce le géant sud-asiatique dans cette disc… [+694 chars]",
        },
        {
          source: {
            id: null,
            name: "Sky Sports",
          },
          author: null,
          title: "Palhinha joins Bayern from Fulham in club-record sale",
          description:
            "Fulham midfielder Joao Palhinha has joined Bayern Munich in a deal worth up to £47.4m.",
          url: "https://www.skysports.com/transfer/news/12691/13162850/fulham-transfer-news-joao-palhinha-joins-bayern-munich-in-club-record-gbp47-4m-sale",
          urlToImage:
            "https://e0.365dm.com/24/03/1600x900/skysports-premier-league-fulham_6505417.jpg?20240330162529",
          publishedAt: "2024-07-11T08:08:00Z",
          content:
            "Fulham midfielder Joao Palhinha has joined Bayern Munich in a deal worth up to £47.4m.\r\nBayern saw a bid earlier this summer rejected but have remained interested in the 29-year-old, who joins for an… [+1480 chars]",
        },
        {
          source: {
            id: null,
            name: "Sky Sports",
          },
          author: "Dharmesh Sheth",
          title: "Arsenal agree deal in principle for Calafiori",
          description:
            "Arsenal have reached an agreement in principle with Bologna for the signing of Riccardo Calafiori.",
          url: "https://www.skysports.com/football/news/11095/13184355/riccardo-calafiori-arsenal-reach-agreement-in-principle-with-bologna-for-italy-international-defender",
          urlToImage:
            "https://e0.365dm.com/24/07/1600x900/skysports-italt-euro-2024-riccardo-calafiori_6597327.jpg?20240703104416",
          publishedAt: "2024-07-24T15:50:00Z",
          content:
            "Arsenal have reached an agreement in principle with Bologna for the signing of Riccardo Calafiori.\r\nHowever, Calafiori still has to take a medical before officially signing a long-term contract with … [+1458 chars]",
        },
        {
          source: {
            id: "al-jazeera-english",
            name: "Al Jazeera English",
          },
          author: "Melinda Farrell",
          title:
            "How Hardik Pandya turned boos into cheers in India’s T20 World Cup 2024 run",
          description:
            "After being the target of fans' scorn in the IPL, Hardik Pandya has been on the path to redemption at the T20 World Cup.",
          url: "https://www.aljazeera.com/sports/2024/6/27/hardik-pandya-india-t20-world-cup-2024-semifinal-boos-crowd-ipl-form",
          urlToImage:
            "https://www.aljazeera.com/wp-content/uploads/2024/06/GettyImages-2159376234-17194722842-1719473154.jpg?resize=1920%2C1421",
          publishedAt: "2024-06-27T09:44:12Z",
          content:
            "Hardik Pandya first heard them in Ahmedabad on March 24 in the opening week of the Indian Premier League 2024. The boos that rumbled around the gigantic Narendra Modi Stadium were understandable, of … [+7705 chars]",
        },
        {
          source: {
            id: null,
            name: "Forbes",
          },
          author:
            "Tim Ellis, Contributor, \n Tim Ellis, Contributor\n https://www.forbes.com/sites/timellis/",
          title:
            "Can India Or South Africa Banish Past Demons To Win T20 World Cup?",
          description:
            "India and South Africa will meet in Barbados for the T20 World Cup trophy on Saturday. Will the perennial bridesmaids finally feast their eyes on an ICC prize?",
          url: "https://www.forbes.com/sites/timellis/2024/06/28/can-india-or-south-africa-banish-past-demons-to-win-t20-world-cup/",
          urlToImage:
            "https://imageio.forbes.com/specials-images/imageserve/667eb0eab799c43e663c1510/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
          publishedAt: "2024-06-28T14:29:09Z",
          content:
            "India's captain Rohit Sharma plays a shot for six runs against Australia during an ICC Men's T20 ... [+] World Cup cricket match at Darren Sammy National Cricket Stadium in Gros Islet, Saint Lucia, M… [+5229 chars]",
        },
      ],
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    }
  }
  render() {
    return (
      <div className="container my-4">
        <h2>News Today - Top Headlines</h2>
        {this.state.articles.map=(element)=>{console.log(element)}}
        <div className="row">
          <div className="col-md-4">
            <NewsItem
              title="myTitle"
              description="mydesc"
              imageUrl="https://ichef.bbci.co.uk/news/1024/branded_news/85c7/live/d448fd00-3771-11ef-a780-47cb50223b50.jpg"
             
            />
          </div>
       
        </div>
      </div>
    );
  }
}
