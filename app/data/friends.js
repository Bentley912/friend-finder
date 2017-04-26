module.exports = function(app) {
        var friends =   [
        {
            "name": "Ahmed",
            "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
            "scores": [
            "5",
            "1",
            "4",
            "4",
            "5",
            "1",
            "2",
            "5",
            "4",
            "1"
            ]
        },
        {
            "name": "Jacob Deming",
            "photo": "https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg",
            "scores": [
            "4",
            "2",
            "5",
            "1",
            "3",
            "2",
            "2",
            "1",
            "3",
            "2"
            ]
        },
        {
            "name": "Jeremiah Scanlon",
            "photo": "https://avatars2.githubusercontent.com/u/8504998?v=3&s=460",
            "scores": [
            "5",
            "2",
            "2",
            "2",
            "4",
            "1",
            "3",
            "2",
            "5",
            "5"
            ]
        },
        {
            "name": "Louis T. Delia",
            "photo": "https://pbs.twimg.com/profile_images/639214960049000449/lNCRC-ub.jpg",
            "scores": [
            "3",
            "3",
            "4",
            "2",
            "2",
            "1",
            "3",
            "2",
            "2",
            "3"
            ]
        },
        {
            "name": "Lou Ritter",
            "photo": "https://m.facebook.com/photo.php?fbid=10208500699025296&id=1542229019&set=a.1549418665704.77596.1542229019&source=11",
            "scores": [
            "4",
            "3",
            "4",
            "1",
            "5",
            "2",
            "5",
            "3",
            "1",
            "4"
            ]
        },
        {
            "name": "Jordan Biason",
            "photo": "https://scontent-ord1-1.xx.fbcdn.net/v/t1.0-9/12741971_10205764267089153_4212986785721953092_n.jpg?oh=4e18265f7d380167223a97fbd7eba278&oe=57B78445",
            "scores": [
            "4",
            "4",
            "2",
            "3",
            "2",
            "2",
            "3",
            "2",
            "4",
            "5"
            ]
        },
        {
            "name": "Davos Seaworth",
            "photo": "http://vignette2.wikia.nocookie.net/p__/images/b/b0/Davos_Seaworth_2.jpg/revision/latest/scale-to-width-down/300?cb=20170125224137&path-prefix=protagonist",
            "scores": [
            "1",
            "3",
            "4",
            "5",
            "2",
            "1",
            "5",
            "5",
            "4",
            "3"
            ]
        },
        {
            "name": "Test",
            "photo": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/SMPTE_Color_Bars.svg/329px-SMPTE_Color_Bars.svg.png",
            "scores": [
            "3",
            "3",
            "3",
            "3",
            "3",
            "3",
            "3",
            "3",
            "3",
            "3"
            ]
        },
        {
            "name": "j",
            "photo": "l",
            "scores": [
            "5",
            "4",
            "1",
            "1",
            "3",
            "1",
            "3",
            "4",
            "5",
            "1"
            ]
        },
        {
            "name": "asd",
            "photo": "asdasd",
            "scores": [
            "3",
            "2",
            "1",
            "4",
            "5",
            "3",
            "3",
            "4",
            "2",
            "2"
            ]
        },
        {
            "name": "Leslie",
            "photo": "C:\\Coding\\Homework\\leslieTree.jpg",
            "scores": [
            "4",
            "3",
            "2",
            "1",
            "1",
            "1",
            "4",
            "1",
            "2",
            "1"
            ]
        },
        {
            "name": "Leslie",
            "photo": "C:\\Coding\\Homework\\leslieTree.jpg",
            "scores": [
            "4",
            "3",
            "2",
            "1",
            "1",
            "1",
            "4",
            "1",
            "2",
            "1"
            ]
        },
        {
            "name": "Leslie",
            "photo": "C:\\Coding\\Homework\\leslieTree.jpg",
            "scores": [
            "4",
            "3",
            "2",
            "1",
            "1",
            "1",
            "4",
            "1",
            "2",
            "1"
            ]
        },
        {
            "name": "Leslie",
            "photo": "C:\\Coding\\Homework\\leslieTree.jpg",
            "scores": [
            "5",
            "3",
            "2",
            "1",
            "1",
            "1",
            "4",
            "1",
            "2",
            "1"
            ]
        },
        {
            "name": "Leslie",
            "photo": "C:\\Coding\\Homework\\leslieTree.jpg",
            "scores": [
            "5",
            "3",
            "2",
            "1",
            "1",
            "2",
            "4",
            "1",
            "2",
            "1"
            ]
        },
        {
            "name": "Leslie",
            "photo": "C:\\Coding\\Homework\\leslieTree.jpg",
            "scores": [
            "5",
            "3",
            "2",
            "1",
            "1",
            "1",
            "4",
            "1",
            "2",
            "1"
            ]
        },
        {
            "name": "Leslie",
            "photo": "\\leslieTree.jpg",
            "scores": [
            "5",
            "3",
            "2",
            "1",
            "1",
            "1",
            "4",
            "1",
            "2",
            "1"
            ]
        },
        {
            "name": "wendy",
            "photo": "https://goo.gl/images/X3I49f",
            "scores": [
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1"
            ]
        },
        {
            "name": "Sam",
            "photo": "http://i1.kym-cdn.com/entries/icons/original/000/016/507/new-profile-pic-cropped-smaller.jpg",
            "scores": [
            "4",
            "3",
            "5",
            "4",
            "4",
            "5",
            "4",
            "4",
            "3",
            "4"
            ]
        },
        {
            "name": "Stephen Colbert",
            "photo": "https://www.google.com",
            "scores": [
            "2",
            "2",
            "3",
            "2",
            "2",
            "2",
            "2",
            "2",
            "2",
            "1"
            ]
        },
        {
            "name": "Stephen Colbert",
            "photo": "https://www.google.com",
            "scores": [
            "2",
            "2",
            "3",
            "2",
            "2",
            "2",
            "2",
            "2",
            "2",
            "1"
            ]
        },
        {
            "name": "Stephen Colbert",
            "photo": "https://www.google.com",
            "scores": [
            "2",
            "2",
            "3",
            "2",
            "2",
            "2",
            "2",
            "2",
            "2",
            "1"
            ]
        },
        {
            "name": "Stephen Colbert",
            "photo": "https://www.google.com",
            "scores": [
            "2",
            "2",
            "3",
            "2",
            "2",
            "2",
            "2",
            "2",
            "2",
            "1"
            ]
        },
        {
            "name": "Stephen Colbert",
            "photo": "https://www.google.com",
            "scores": [
            "3",
            "2",
            "3",
            "2",
            "2",
            "2",
            "2",
            "2",
            "2",
            "1"
            ]
        },
        {
            "name": "wdq",
            "photo": "wecv",
            "scores": [
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1"
            ]
        },
        {
            "name": "wdq",
            "photo": "wecv",
            "scores": [
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1"
            ]
        },
        {
            "name": "wendy",
            "photo": "https://goo.gl/images/X3I49f",
            "scores": [
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1"
            ]
        },
        {
            "name": "wendy",
            "photo": "https://goo.gl/images/X3I49f",
            "scores": [
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1"
            ]
        },
        {
            "name": "DeeDee",
            "photo": "http://cdn.akc.org/akcdoglovers/Pomeranian_hero.jpg",
            "scores": [
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1"
            ]
        },
        {
            "name": "Vincent",
            "photo": "http://www.artble.com/imgs/3/2/c/55784/vincent_van_gogh.jpg",
            "scores": [
            "2",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "5",
            "1",
            "1"
            ]
        },
        {
            "name": "Vincent",
            "photo": "http://www.artble.com/imgs/3/2/c/55784/vincent_van_gogh.jpg",
            "scores": [
            "2",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "5",
            "1",
            "1"
            ]
        },
        {
            "name": "Sharon",
            "photo": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAjbAAAAJDU5YTVjZWE3LTkyZjctNGQ5MC1hMDZjLWI0OWNlMDFkNzI2OQ.jpg",
            "scores": [
            "2",
            "4",
            "3",
            "1",
            "1",
            "1",
            "3",
            "3",
            "3",
            "1"
            ]
        },
        {
            "name": "Michelle",
            "photo": "hgfhfghfghf",
            "scores": [
            "2",
            "3",
            "3",
            "4",
            "5",
            "1",
            "2",
            "3",
            "3",
            "3"
            ]
        },
        {
            "name": "stan",
            "photo": "https://www.fakeimages.com/awesomepeople/me.jpg",
            "scores": [
            "3",
            "3",
            "4",
            "2",
            "5",
            "3",
            "5",
            "3",
            "1",
            "2"
            ]
        },
        {
            "name": "is",
            "photo": "joi",
            "scores": [
            "4",
            "3",
            "3",
            "3",
            "4",
            "5",
            "4",
            "4",
            "5",
            "2"
            ]
        },
        {
            "name": "Freddie",
            "photo": "https://media.mercola.com/assets/images/foodfacts/banana-og.jpg",
            "scores": [
            "5",
            "5",
            "3",
            "2",
            "4",
            "4",
            "5",
            "3",
            "5",
            "5"
            ]
        },
        {
            "name": "Freddie",
            "photo": "https://media.mercola.com/assets/images/foodfacts/banana-og.jpg",
            "scores": [
            "5",
            "5",
            "3",
            "2",
            "4",
            "4",
            "5",
            "3",
            "5",
            "5"
            ]
        },
        {
            "name": "Freddie",
            "photo": "https://media.mercola.com/assets/images/foodfacts/banana-og.jpg",
            "scores": [
            "5",
            "5",
            "3",
            "2",
            "4",
            "4",
            "5",
            "3",
            "5",
            "5"
            ]
        },
        {
            "name": "J",
            "photo": "test",
            "scores": [
            "3",
            "5",
            "3",
            "2",
            "5",
            "5",
            "4",
            "3",
            "3",
            "1"
            ]
        },
        {
            "name": "ljac",
            "photo": "sdjkn",
            "scores": [
            "3",
            "3",
            "3",
            "3",
            "3",
            "3",
            "3",
            "3",
            "3",
            "2"
            ]
        },
        {
            "name": "Emily",
            "photo": "http://",
            "scores": [
            "3",
            "3",
            "3",
            "3",
            "3",
            "3",
            "3",
            "3",
            "3",
            "3"
            ]
        }
        ];

}