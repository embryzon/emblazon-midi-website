//sort the elements by some order idk lmao
var midis = [
    {
        title: 'Gurenge',
        fileDownload: 'gurenge.mid',
        bg: 'gurenge',
        dateOrder: 0,
        artist: 'LiSA',
        noteCount: '208,275',
        fileSize: '1.59 MB'
    },
    {
        title: 'Dororo OP',
        fileDownload: 'DororoOPBlackMidi.mid',
        bg: 'dororo',
        DateOrder: 1,
        artist: 'Queen Bee',
        noteCount: '29,784',
        fileSize: '233.33 KB' 
    },
    {
        title: 'Shinzou wo Sasageyo',
        fileDownload: 'ShinzouwoSasageyoBlackMidi.mid',
        bg: 'sasageyo',
        dateOrder: 2,
        artist: 'Linked Horizon',
        noteCount: '132,922',
        fileSize: '1.01 MB'
    },
    {
        title: 'Throe',
        fileDownload: 'Throe.mid',
        bg: 'throe',
        dateOrder: 3,
        artist: 'Emblazon',
        noteCount: '192,825',
        fileSize:  '1.47 MB'
    },
    {
        title: 'ANIMA',
        fileDownload: 'ReoNaAnimaBlackMIDI.mid',
        bg: 'anima',
        dateOrder: 4,
        artist: 'ReoNa',
        noteCount: '231,855',
        fileSize:  '1.77 MB'
    },
    {
        title: 'Unravel',
        fileDownload: 'TKUnravel.mid',
        bg: 'unravel',
        dateOrder: 5,
        artist: 'TK from Ling Tosite Sigure',
        noteCount: '99,912',
        fileSize:  '781.59 KB'
    },
    {
        title: 'Amazing Mirage',
        fileDownload: 'Amazing_mirage.mid',
        bg: 'mirage',
        dateOrder: 6,
        artist: 'Lapix',
        noteCount: '106,842',
        fileSize:  '835.83 KB'
    },
    {
        title: 'Almagest',
        fileDownload: 'Almagest.mid',
        bg: 'almagest',
        dateOrder: 7,
        artist: 'Galdeira',
        noteCount: '49,217',
        fileSize:  '385.48 KB'
    },
    {
        title: 'Septette for the Dead Princess',
        fileDownload: 'Septette_for_my_dead_serverRST.mid',
        bg: 'rst',
        dateOrder: 8,
        artist: 'ZUN',
        noteCount: '121,000',
        fileSize:  '951.94 KB'
    },
    {
        title: 'ECHIDNA',
        fileDownload: 'EchidnaFixed.mid',
        bg: 'echidna',
        dateOrder: 9,
        artist: 'HuΣer',
        noteCount: '82,776',
        fileSize:  '650.21 KB'
    },
    {
        title: 'My War (Attack on Titan Final Season OP)',
        fileDownload: 'My_War.mid',
        bg: 'war',
        dateOrder: 10,
        artist: 'Shinsei Kamattechan',
        noteCount: '54,298',
        fileSize:  '427.07 KB'
    },
    {
        title: 'Record One\'s Dream',
        fileDownload: 'Rekordwansdrim.mid',
        bg: 'mibtc2',
        dateOrder: 11,
        artist: 'uma vs. morimori atsushi',
        noteCount: '69,420',
        fileSize:  '547.65 KB'
    },
    {
        title: 'Nothing but Theory (More JazzFunktion Mix)',
        fileDownload: 'nothing_but_theory.mid',
        bg: 'theory',
        dateOrder: 12,
        artist: 'Lapix',
        noteCount: '88,888',
        fileSize:  '708 KB'
    },
    {
        title: 'Tokyo Wonder (Tokyo Revengers ED 2)',
        fileDownload: 'Nakimushi_Tokyo_Wonder.mid',
        bg: 'tokyo',
        dateOrder: 13,
        artist: 'Nakimushi',
        noteCount: '9,999',
        fileSize:  '81 KB '
    },
    {
        title: 'Not to be racist or anything',
        fileDownload: 'not_to_be_racist_or_anything.mid',
        bg: 'racist',
        dateOrder: 14,
        artist: 'IDK',
        noteCount: 'IDK',
        fileSize:  '5.96 KB'
    },
    {
        title: 'Lyrith-meikyū ririsu',
        fileDownload: 'Lyrith.mid',
        bg: 'lyrith',
        dateOrder: 15,
        artist: 'Yumemido',
        noteCount: '77,667',
        fileSize:  '614.96 KB'
    },
    {
        title: 'Modular Technology',
        fileDownload: 'Modular_technology-1.mid',
        bg: 'modular',
        dateOrder: 16,
        artist: 'Sota Fujimori',
        noteCount: '8,686',
        fileSize:  '76.64 KB'
    },
    {
        title: 'Mope Mope',
        fileDownload: 'mope_mope.mid',
        bg: 'mopemope',
        dateOrder: 17,
        artist: 'LeaF',
        noteCount: '26,666,',
        fileSize:  '210.23 KB'
    },
    {
        title: 'Voyage Between Space/Time',
        fileDownload: 'MIBTC3.mid',
        bg: 'mibtc3',
        dateOrder: 18,
        artist: 'Trina Lydia',
        noteCount: 'I forgot //',
        fileSize:  '268 KB'
    },
];

window.onload = loadItems(midis);
alert("Your device has been infected with VIRUS LMFAO JK. \n\n\n\n Right now, client-side search feature is work in progress. Please use 'Ctrl + F' or 'Cmd + F' for now. If you are in mobile, tap the 'find in page' in your browsers. PRESS OK TO CONTINUE");

function loadItems(arr){
    div = document.getElementById('download-items');
    
    //remove all items first
    div.innerHTML = '';

    var str = '';
    for(var i = 0; i < arr.length; i++){
        var temp='';

        //FINALIZE THIS LATER
        // if (i % 3 == 0){
            temp += `<div class="row m-2">`;
        // }

        temp += 
        `<div class="col-lg-12">
            <div class="card bg-black text-white mx-auto mb-2 song-title-${i}">
                <div class="card-body">
                    <kbd class="bg-transparent">
                    <h5 class=" card-title pt-5 rounded"> ${arr[i].title} </h5>
                    <hr>
                    <p class="card-subtitle mb-2 text-light"> 
                    Artist: ${arr[i].artist} <br>
                    Note count: ${arr[i].noteCount} notes<br>
                    File size: ${arr[i].fileSize} 
                    </p>
                    <a href="../MIDIs/${arr[i].fileDownload}" class="btn btn-dark mx-auto" download>Download</a>
                    </kbd>
                </div>
            </div>
        </div>`;

        // if (i % 3 == 2){
            temp += `</div>`;
        // }
        str += temp;
    }
    
    div.innerHTML += str;

    for (let i = 0; i < arr.length; i++){
        var title = document.querySelector(`.song-title-${i}`);
        console.log(i);
        title.style.background = 
        `linear-gradient(
            rgba(0, 0, 0, 0.85), 
            rgba(0, 0, 0, 0.99)
          ),
          url("../img/bg/${arr[i].bg}.png")`; 
          title.style.backgroundPosition = `center`;
    }
}

     

// {
//     title: ' ',
//     fileDownload: ' ',
//     bg: ' ',
//     dateOrder: 25,
//     artist: ' ',
//     noteCount: ' ',
//     fileSize:  ' ',
//     videoID: ' ',
// },