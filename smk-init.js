SMK.INIT( {
    containerSel: '#smk-map-frame',
    config: [ './smk-config.json', '?' ],
    baseUrl:        'smk/dist',
    id:             'my-map'
} )
.then( function ( smk ) {
    // SMK initialized
} )
