// Example file src/helpers/bold.js
module.exports = function(options) {
    var mso ='<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="[base_url]" style="height:45px;v-text-anchor:middle;width:250px;" arcsize="5%" strokecolor="#668cb3" fillcolor="#668cb3"><w:anchorlock/><center style="color:#ffffff;font-family:sans-serif;font-size:14px;text-transform: uppercase">'+options.fn(this)+'</center> </v:roundrect>';
    return mso;
};