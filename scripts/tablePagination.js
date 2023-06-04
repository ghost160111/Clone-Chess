$("table.paginated").each(
  function () {
    let $table = $(this);
    let itemsPerPage = 16;
    let currentPage = 0;
    let pages = Math.ceil($table.find("tr:not(:has(th))").length / itemsPerPage);
    $table.bind("repaginate",function () {
        if (pages > 1) {
          let pager;
          if ($table.next().hasClass("pager"))
            pager = $table.next().empty();
          else
            pager = $('<div class="pager" style="padding-top: 20px; direction:ltr; " align="center"></div>');

          //$('<button class="pg-goto"></button>').text(' « First ').bind('click', function () {
          //    currentPage = 0;
          //    $table.trigger('repaginate');
          //}).appendTo(pager);

          $('<button class="pg-goto">‹</button>').bind("click", function () {
                if (currentPage > 0)
                  currentPage--;
                $table.trigger("repaginate");
              }
            )
            .appendTo(pager);

          let startPager = currentPage > 2 ? currentPage - 2 : 0;
          let endPager = startPager > 0 ? currentPage + 3 : 5;
          if (endPager > pages) {
            endPager = pages;
            startPager = pages - 5;
            if (startPager < 0)
              startPager = 0;
          }

          for (let page = startPager; page < endPager; page++) {
            $('<button id="pg' + page + '" class="' + (page == currentPage ? "pg-selected" : "pg-normal") + '"></button>')
              .text(page + 1)
              .bind("click", {newPage: page,},function (event) {
                  currentPage = event.data["newPage"];
                  $table.trigger("repaginate");
                }
              ).appendTo(pager);
          }

          $('<button class="pg-goto">›</button>').bind("click",function () {
                if (currentPage < pages - 1)
                  currentPage++;
                $table.trigger("repaginate");
              }
            ).appendTo(pager);
          //$('<button class="pg-goto"> Last » </button>').bind('click', function () {
          //    currentPage = pages - 1;
          //    $table.trigger('repaginate');
          //}).appendTo(pager);

          if (!$table.next().hasClass("pager"))
            pager.insertAfter($table);
          //pager.insertBefore($table);
        } // end $table.bind('repaginate', function () { ...

        $table.find("tbody tr:not(:has(th))")
          .hide()
          .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
          .show();
      }
    );

    $table.trigger("repaginate");
  }
);
