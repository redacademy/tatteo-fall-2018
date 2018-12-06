jQuery(document).ready(function($) {
    $(document).on("click", ".upload_image_button", function() {

        jQuery.data(document.body, 'prevElement', $(this).prev());

        window.send_to_editor = function(html) {
            let imgurl = jQuery('img',html).attr('src');
            let inputText = jQuery.data(document.body, 'prevElement');

            if(inputText != undefined & inputText != '')
            {
                inputText.val(imgurl);
            }

            tb_remove();
        };

        tb_show('', 'media-upload.php?type=image&amp;TB_iframe=true');
        return false;
    });
});