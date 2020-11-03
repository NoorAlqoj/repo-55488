var chart;
$(document).ready(function() {
    trio.init({

        // datepicker_inline: $("#datepicker_inline"),
        timepicker: $("#timepicker, #timepicker2"),
        datepicker: $("#datepicker, #datepicker1"),
        datepicker2: $("#datepicker2"),
        datetimepicker3: $("#datetimepicker3"),
        datetimepicker4: $("#datetimepicker4"),
        galleryMoreImages: ".photo-gallery .upload-image input[type='file']",
        removeGalleryImage: ".photo-gallery .remove-image"

    });
});

var self;
var trio = {
    init: function(options) {
        this.settings = options;
        self = this;

        this.utilities();
        this.loader();
        this.configureModal();
        this.stickyHeader();
        this.selectpicker();
        this.datepickers();
        //this.imgrid();
        //this.video();
        //this.numberSlider();
        this.galleryMoreImages();
        this.removeGalleryImage();
    },
    loader: function() {
        setTimeout(function() {
            $('body').addClass('loaded');
        }, 3000);
    },

    // datepickers

    datepickers: function() {
        this.settings.timepicker.datetimepicker({
            format: 'LT',
            ignoreReadonly: true,
            keepOpen: false
        });
        // this.settings.datepicker_inline.datetimepicker({
        //      inline: true,
        //      format: 'DD/MM/YYYY'
        //  });
        this.settings.datepicker.datetimepicker({
            format: 'L',
            keepOpen: false,
            ignoreReadonly: true

        });
        this.settings.datepicker2.datetimepicker({
            keepOpen: false,
            ignoreReadonly: true
        });
        this.settings.datetimepicker3.datetimepicker({
            keepOpen: false,
            ignoreReadonly: true,
            format: "YYYY"
        });
        this.settings.datetimepicker4.datetimepicker({
            keepOpen: false,
            ignoreReadonly: true,
            format: "MM",
        });

    },



    // img layout plugin

    // imgrid: function()
    //     {
    //         var loader = $('#loader').html();
    //         $(".events-wrapper").imgrid({
    //             gridLayout: 'fluid',
    //             gridLoader: true,
    //             thumbMargin: 1,
    //             thumbLightbox: false

    //         });
    //         $(".gallery-wrapper").imgrid({
    //             gridLayout: 'masonry',
    //             gridLoader: true,
    //             gridAnimation: {
    //                 trigger: 'onScroll', //Suport onStart | onScroll
    //                 animationType: 'shrink',
    //                 animationDuration: 700,
    //                 delay: true,    // Successively delay the animation of each element in a set by the targeted amount
    //                 offsetTop: 250, // Distance in pixels from the lower edge of the window and the top edge of the row that must exist before running the animation..
    //                 timeout: 0      // Wait a certain time before running the row animation.
    //             },
    //             thumbMargin: 30,
    //             thumbLightbox: false,
    //             thumbReziseImg: true
    //         });
    //         $('.port-gallery .filter').click(function (e) {
    //             $(".port-gallery .filter").removeClass("active");
    //             $(this).addClass("active");
    //             e.preventDefault();
    //             $(".gallery-wrapper").imgrid('filter', $(this).data('filter'));
    //         });
    //         $(".gallery-wrapper").on('imgrid.loaded', function (e) {
    //             // $(e.target).find('.imgrid-thumbnail').lightBox();
    //         });
    //     },


    // video: function () {
    //      $('.video-btn').click(function(e) {
    //         e.preventDefault();
    //         var l = $(this).find(".abs-link");
    //         var t = l.data("video-type");
    //         var tt = l.data("video-title");
    //         var src = l.data("src");
    //         if(t=="youtube"){
    //             $("#video-modal iframe").attr("src",src);
    //             $("#video-modal .modal-body").addClass("youtube-video");
    //         }
    //         else{
    //             $("#video-modal video source").attr("src",src);
    //             $("#video-modal .modal-body").addClass("mp4-video");
    //             $("#video-modal video")[0].load();
    //             $("#video-modal video").trigger("play");
    //         }
    //         $("#video-modal .modal-head").text(tt);
    //          $("#video-modal").modal("show");

    //     });
    //     $('#video-modal').on('hide.bs.modal', function (e) {
    //         $("#video-modal iframe").attr("src","");
    //         $("#video-modal video source").attr("src","");
    //         $("#video-modal .modal-body").removeClass("youtube-video");
    //         $("#video-modal .modal-body").removeClass("mp4-video");
    //         $("#video-modal video").trigger("pause");
    //     });
    //     $("#videos .video-slider").on('afterChange', function(event, slick, currentSlide) {
    //         $("#videos .thumb-slider").slick('slickGoTo', currentSlide);

    //     });
    // },
    // numberSlider: function(){
    //     var $slider = $('.number-slide-wrapper .latest-number-slider');

    //     if ($slider.length) {
    //         var currentSlide;
    //         var slidesCount;
    //         var sliderCounter = $(".slider-counter");

    //         var updateSliderCounter = function(slick, currentIndex) {
    //             currentSlide = slick.slickCurrentSlide() + 1;
    //             slidesCount = slick.slideCount;
    //             $(sliderCounter).text(currentSlide + '/' +slidesCount)
    //         };

    //         $slider.on('init', function(event, slick) {
    //             //$slider.append(sliderCounter);
    //             updateSliderCounter(slick);
    //         });

    //         $slider.on('afterChange', function(event, slick, currentSlide) {
    //             updateSliderCounter(slick, currentSlide);
    //         });

    //         $slider.slick({
    //             "slidesToShow": 6, 
    //             "slidesToScroll": 1,
    //             "variableWidth": false,
    //             "arrows": false,
    //             "infinite": false,
    //             "dots": false,
    //             "focusOnSelect": true,
    //             "asNavFor": ".latest-news .thumb-slider , .latest-banner",
    //             "vertical": true,
    //             "autoplay": false,
    //             "centerMode": true,
    //             "responsive": [
    //                 {
    //                     "breakpoint": 1200, 
    //                     "settings": {
    //                         "slidesToShow": 4,
    //                         "centerMode":true
    //                     }
    //                 },
    //                 {
    //                     "breakpoint": 991,
    //                     "settings": {
    //                         "slidesToShow": 4,
    //                         "centerMode": true
    //                     }
    //                 },
    //                 {
    //                     "breakpoint": 768,
    //                     "settings": {
    //                         "slidesToShow": 7,
    //                          "vertical": false,
    //                         "centerMode": false
    //                     }
    //                 },
    //                 {
    //                     "breakpoint": 575,
    //                     "settings": {
    //                         "slidesToShow": 6,
    //                         "vertical": false,
    //                         "centerMode": false
    //                     }
    //                 },
    //                  {
    //                     "breakpoint": 414,
    //                     "settings": {
    //                         "slidesToShow": 4,
    //                          "vertical": false,
    //                         "centerMode": false
    //                     }
    //                 }
    //             ]
    //         });
    //     }
    // },


    // stickyHeader
    stickyHeader: function() {

        $(window).scroll(function() {
            // if($(window).width() > 767){

            // }
            if ($(this).scrollTop() > 150) {
                $("header").addClass("sticky");
                /*$(".top-bar").slideUp(500);*/
            } else {
                $("header").removeClass("sticky");
                // $(".top-bar").slideDown(500);
            }
        });
    },

    // selectpicker
    selectpicker: function() {
        $.fn.selectpicker.Constructor.BootstrapVersion = '4';
        if (/Android|webOS|iPhone|BlackBerry/i.test(navigator.userAgent)) {
            $.fn.selectpicker.Constructor.DEFAULTS.mobile = true;
        }
        $('select').selectpicker({
            container: 'body',
            size: 8,
            liveSearchPlaceholder: 'Search',
            liveSearch: 'true'
        });
    },


    utilities: function() {
        var $slider = $('.main-banner');
        if ($slider.length) {
            $slider.on('afterChange', function(event, slick, currentSlide) {
                $slide = $slider.find(".slick-active");
                var type = $slide.find(".video").attr("data-type");
                var video = "";
                if(type){
                    if(type=="youtube"){
                        video = $slide.find(".video").attr("data-video");
                        $slide.find("iframe").attr("src",video);
                        var videos = $slider.find("video");
                        $(videos).each(function(){
                            $(this)[0].pause();
                        })
                    }
                    else if(type=="mp4"){
                        $slider.find("iframe").attr("src","");
                        $slide.find("video")[0].play();
                    }
                    else{
                        $slider.find("iframe").attr("src",video);
                        slider.find("video")[0].pause();
                    }
                }
                else{
                    $slider.find("iframe").attr("src",video);
                    var videos = $slider.find("video");
                    $(videos).each(function(){
                        $(this)[0].pause();
                    });
                }
            });
        }
        // AOS.init({
        //     delay: 100, // values from 0 to 3000, with step 50ms
        //     duration: 900, // values from 0 to 3000, with step 50ms
        // });
        // wow animation
        //new WOW().init();


        //$('#datetimepicker3').datetimepicker();
        //slick  slider 
        $(".slick-instance").slick();

        // mCustomScrollbar
        // $(".inner-scroll").mCustomScrollbar();
        // page scroller
        $(".scroll-up").on("click", function(e) {
            e.preventDefault();
            $("html, body").animate({ scrollTop: 0 }, 3000);

        });

        $('[data-toggle="tooltip"]').tooltip()
            // $(".tooltip").tooltip('show');



        $('.our-media a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
            $("#videos").find(".slick-instance").slick('setPosition', 0);
        });
        $('.ports-list a[data-toggle="pill"]').on('shown.bs.tab', function(e) {
            $(".daily-forecast").slick('setPosition', 0);
        });
        $('.weather-reports a[data-toggle="tab"]').on('shown.bs.tab', function(e) {
            $(".weather-wrapper").slick('setPosition', 0);
        });

        $(".menu-icon").click(function(e) {
            e.preventDefault();
            $("body").toggleClass("menu-active");
        });


        $(".add-optional-fields .add-icon").click(function(e) {
            e.preventDefault();
            $(".optional-field").css("display", "block");
            $(".add-optional-fields").addClass("remove-optional-fields");
        });

        $(".show-pw").on("click", function(e) {
            e.preventDefault();
            var input = $(this).parent().find(".form-control");
            if (input.attr("type") == "password") {
                input.attr("type", "text");
            } else {
                input.attr("type", "password");
            }
            $(this).find('i').toggleClass('fa-eye-slash');
        });

        $(".add-product-link a").click(function(e) {
            e.preventDefault();
            var html = '<div class="form-group">' +
                '<input type="text" class="form-control" name="">' +
                '<label class="control-label">Product Page link</label>' +
                '<a href="#" class="remove-product-link"><i class="fas fa-trash"></i></a>' +
                '</div>';
            var prnt = $(this).parents(".add-product-link");
            $(prnt).append(html);
        });
        $(document).on("click", ".remove-product-link", function(e) {
            e.preventDefault();
            $(this).parents(".form-group").remove();
        });

        $(".toggle-filter-btn").on("click", function(e) {
            e.preventDefault();
            if ($(window).width() <= 575) {
                $(this).parent().toggleClass("active");
                $(this).parent().find("ul").slideToggle();
            }
        });

        $('.select-file input[type="file"]').change(function(e){
            var fileName = e.target.files[0].name;
            // alert('The file "' + fileName +  '" has been selected.');
        
            $(".attahment-file span").val("'fileName'");
        });

        $(".attahment-file a").on("click", function(e) {
            e.preventDefault();
             // $(".attahment-file").css("display", "none");
             $('.select-file input[type="file"]').val('');
        });

        $('.select-file input[type="file"]').change(function(e){
            e.preventDefault();
            $(".attahment-file").css("display", "block");
        });

        // var myDropzone = new Dropzone("#dropzone", { url: "/file/post" });
        // $("#dropzone").dropzone({ url: "/file/post" });

        // myDropzone.on("complete", function(file) {
        //     myDropzone.removeFile(file);
        // });


        // $(".toggle-filter").on("click", function(e){
        //     e.preventDefault();
        //     if($(window).width() <= 1201) {
        //         $(this).parent().toggleClass("active");
        //         $(this).parent().find(".categories").slideToggle();
        //     }
        // });


    },

    galleryMoreImages: function() {
        // $(document).on("change", this.settings.galleryMoreImages, function() {
        //     var crnt = $(".upload-image");
        //     var files = $(this)[0].files;
        //     for (i = 0; i < files.length; i++) {
        //         var readImg = new FileReader();
        //         var file = files[i];

        //         if (file.type.match('image.*')) {
        //             readImg.onload = (function(file) {
        //                 return function(e) {
        //                     $(".gallery-images .upload-img").before(
        //                         '<div class="gallery-items">' +
        //                         '<div class="image">' +
        //                         '<img src="' + e.target.result + '" alt="">' +
        //                         '</div>' +
        //                         '<ul class="action-controls">' +
        //                         '<li>' +
        //                         '<a href="#" class="remove-image">' +
        //                         '<i class="material-icons">delete</i>' +
        //                         '</a>' +
        //                         '</li>' +
        //                         '</ul>' +
        //                         '</div>');
        //                 };

        //             })(file);
        //             readImg.readAsDataURL(file);
        //         }
        //     }
        // });
        $(document).on("change", ".action-control input[type='file']", function(e) {
            var crnt = $(this).parents(".upload-image").find(".profile");
            var files = $(this)[0].files;
            for (i = 0; i < files.length; i++) {
                var readImg = new FileReader();
                var file = files[i];

                if (file.type.match('image.*')) {
                    readImg.onload = (function(file) {
                        return function(e) {
                            $(crnt).append(
                                "<img src='" + e.target.result + "' alt=''>"
                            );
                        };

                    })(file);
                    readImg.readAsDataURL(file);
                }

            }
        });
    },

    removeGalleryImage: function() {
        $(document).on("click", this.settings.removeGalleryImage, function(e) {
            e.preventDefault();
            $(this).parents(".upload-image").find(".profile img").remove();
        });
    },

    // modal
    configureModal: function() {
        $("body").on("click", "*[data-toggle='custom-modal']", function(e) {
            e.preventDefault();
            $(".custom-modal").removeClass("large");
            var url = $(this).attr("data-path");
            var size = $(this).attr("data-size");
            var class_name = $(this).attr("data-class");
            $(".custom-modal").removeClass("large");
            $(".custom-modal").removeClass("medium");
            $(".custom-modal").removeClass("small");
            $.get(url, function(data) {
                $(".custom-modal").modal("show");
                $(".custom-modal .modal-body").html(data);

                if (size) {
                    $(".custom-modal").addClass(size);
                }
                if (class_name) {
                    $(".custom-modal").addClass(class_name);
                }
                setTimeout(function() {
                    $(".custom-modal .modal-body").addClass("show");
                }, 200);
                $("body").addClass("remove-scroll");
            });
        });
        $(".modal").on("hidden.bs.modal", function() {
            $(".custom-modal .modal-body").removeClass("show");
            $(".custom-modal .modal-body").empty();
            $(".custom-modal").removeClass("account-modal");
            $("body").removeClass("remove-scroll");
            $(".custom-modal").removeClass("large");
            $(".custom-modal").removeClass("medium");
            $(".custom-modal").removeClass("small");
        });
    },
};
var lazyload = {
    load: function(wrapper, dataURL) {
        $(".marker-end")
            .on('lazyshow', function() {
                if ($("#loadmorecount").val() < 3) {
                    $.ajax({
                        url: dataURL,
                        dataType: "html",
                        success: function(responseText) {
                            setTimeout(function() {
                                if (responseText != "") {
                                    $(wrapper).append($.parseHTML(responseText));
                                    $(window).lazyLoadXT();
                                    $('.marker-end').lazyLoadXT({ visibleOnly: false, checkDuplicates: false });
                                } else {
                                    $('.marker-end').hide();
                                }
                            }, 700);

                        },
                        complete: function() {
                            $("#loadmorecount").val(parseInt($("#loadmorecount").val()) + 1);
                        }
                    })
                } else {
                    $('.marker-end').hide();
                }
            })
            .lazyLoadXT({ visibleOnly: false });
    }
};