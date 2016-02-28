function duplicatePage()
{
    createTemplate('t1', pageNum).spawn({nPage: pageNum + 1, bOverlay: false});
    removeTemplate('t1');
}