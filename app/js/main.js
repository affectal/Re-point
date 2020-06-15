$(function() {

    var checkboxes = document.querySelectorAll('input.check-item'),
        checkall = document.getElementById('right-check-all');

    // _multi-check____________________________________________________________________________________________________

    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].onclick = function() {
            var checkedCount = document.querySelectorAll('input.check-item:checked').length;

            checkall.checked = checkedCount > 0;
            checkall.indeterminate = checkedCount > 0 && checkedCount < checkboxes.length;
        }
    }
    checkall.onclick = function() {
        for (var i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = this.checked;
        }
    }


    // _unblock button___________________________________________________________________________________________________


    $('.right-input').change(function() {
        if ($(this).is(':checked'))
            $('.requests__form-btn').removeAttr('disabled');
        else
            $('.requests__form-btn').attr('disabled', 'disabled');
    });


    // _sorting__________________________________________________________________________________________________________


    var sortByNameBtn = document.getElementById('sortByName'),
        sortByDateBtn = document.getElementById('sortByDate'),
        items = $('.row');


    function sortingByName() {
        Array.from(items).sort(function(a, b) {
            a = a.querySelector('.sortByName').innerText.toLowerCase()
            b = b.querySelector('.sortByName').innerText.toLowerCase()
            if (name.hasClass('down')) {
                return (a < b) - (a > b)
            } else {
                return (a > b) - (a < b)
            }
        }).forEach(function(n, i) {
            n.style.order = i
        })
    }

    function sortingByDate() {
        Array.from(items).sort(function(a, b) {
            a = a.querySelector('.sortByDate').innerText
            b = b.querySelector('.sortByDate').innerText
            if (date.hasClass('down')) {
                return a < b ? -1 : a > b ? 1 : 0;
            } else {
                return a > b ? -1 : a < b ? 1 : 0;
            }
        }).forEach(function(n, i) {
            n.style.order = i
        })
    }

    sortByNameBtn.addEventListener('click', sortingByName);
    sortByDateBtn.addEventListener('click', sortingByDate);


    var date = $('.row__title.date'),
        name = $('.row__title.name');

    date.click(function() {
        if (date.hasClass('down')) {
            date.removeClass('down');
            name.removeClass('down');
            name.removeClass('up');
            date.addClass('up');

        } else {
            date.removeClass('up');
            name.removeClass('down');
            name.removeClass('up');
            date.addClass('down');
        }
    });

    name.click(function() {
        if (name.hasClass('down')) {
            name.removeClass('down');
            date.removeClass('down');
            date.removeClass('up');
            name.addClass('up');
        } else {
            name.removeClass('up');
            date.removeClass('down');
            date.removeClass('up');
            name.addClass('down');
        }
    });

    // _main select________________________________________________________________________________________________________

    var pharmaciesBtn = $('.pharmacy-chain-left'),
        coursesBtn = $('.courses-left'),
        requestsBtn = $('.requests-left'),
        profileBtn = $('.profile-left'),
        pharmacies = $('.pharmacy-chain'),
        courses = $('.courses'),
        requests = $('.requests'),
        profile = $('.profile');

    pharmaciesBtn.click(function() {
        pharmaciesBtn.addClass('active');
        pharmacies.addClass('active');
        coursesBtn.removeClass('active');
        requestsBtn.removeClass('active');
        profileBtn.removeClass('active');
        courses.removeClass('active');
        requests.removeClass('active');
        profile.removeClass('active');
    });
    coursesBtn.click(function() {
        coursesBtn.addClass('active');
        courses.addClass('active');
        pharmaciesBtn.removeClass('active');
        requestsBtn.removeClass('active');
        profileBtn.removeClass('active');
        pharmacies.removeClass('active');
        requests.removeClass('active');
        profile.removeClass('active');
    });
    requestsBtn.click(function() {
        requestsBtn.addClass('active');
        requests.addClass('active');
        pharmaciesBtn.removeClass('active');
        coursesBtn.removeClass('active');
        profileBtn.removeClass('active');
        pharmacies.removeClass('active');
        courses.removeClass('active');
        profile.removeClass('active');
    });
    profileBtn.click(function() {
        profileBtn.addClass('active');
        profile.addClass('active');
        pharmaciesBtn.removeClass('active');
        coursesBtn.removeClass('active');
        requestsBtn.removeClass('active');
        pharmacies.removeClass('active');
        courses.removeClass('active');
        requests.removeClass('active');
    });


    // _error validation_____________________________________________________________________________________________________


    $('.left.btn').on('click', function() {
        $('input.field').each(function() {
            if ($(this).val() != '') {
                $(this).removeClass('warning');
                $('.input-subtitle').removeClass('warning');
            } else {
                $(this).addClass('warning');
                $('.input-subtitle').addClass('warning');
            }
        });
    });



});