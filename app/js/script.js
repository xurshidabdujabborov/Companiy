window.addEventListener("load", function (e) {
    // header toggle
    $("header .activeBars").click(function () {
        $(" header .activeMenuBars").slideToggle(1000)
    })
    // main
    $("main .BgBlue").click(function () {
        if ($("main .activeCourses").hasClass("activeCourses")) {
            $("main .activeCourses").removeClass("activeCourses");
        } else {
            $("main .def").addClass("activeCourses");
        }
    });

    //   owl-carusel 

    $(".proekti .owl-carousel").owlCarousel({
        items: 4,
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeout: 1000,
        nav: true,
    });

    /// video videoPlayer playing video

    $(".videoPlayer .fa-play").click(function () {
        document.querySelector(".work video").play();
        $(".videoPlayer .work").addClass("active");
        $(this).fadeOut();
    });

    $(".videoPlayer .work").mouseover(function () {
        if ($(this).hasClass("active")) {
            $(".videoPlayer .fa-pause").fadeIn(); // block
            $(".videoPlayer .fa-pause").css("display", "flex");
        }
    });

    $(".videoPlayer .work").mouseout(function () {
        $(".videoPlayer .fa-pause").fadeOut();
    });

    $(".videoPlayer .fa-pause").click(function () {
        document.querySelector(".work video").pause();
        $(".videoPlayer .fa-play").fadeIn();
        $(".videoPlayer .work").removeClass("active");
    });

    // login bottom

    $(".headerLogin button").click(function (e) {
        e.preventDefault();
        if ($(".headerLogin input").val() === "") {
            $(".errorMsg").show();
        } else {
            $(".errorMsg").hide();
        }
    });
    $(".bottom .eyes").click(function () {
        var attr = $(".bottom .pass input").attr("type");
        if (attr == "password") {
            $(".bottom .pass input").attr("type", "text");
        } else {
            $(".bottom .pass input").attr("type", "password");
        }
    });

    $(".headerLogin button").click(function (e) {
        e.preventDefault();
        if ($(".headerLogin input").val() === "") {
            $(".errorMsg").this.show();
        } else {
            $(".errorMsg").this.hide();
        }
    });
    /// header navbar signin close

    $(".headerLogin .close").click(function () {
        $(".headerLogin").fadeOut(500);
    });

    $(".bottom .signUp").click(function () {
        $(".headerLogin").fadeIn();
        $(".headerLogin").css("display", "flex");
    });
})

