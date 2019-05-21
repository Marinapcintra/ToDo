import { Component, OnInit, AfterViewInit, EventEmitter, Output, Input, ViewChild } from '@angular/core';

@Component({
    selector: 'google-places',
    templateUrl: 'google-places.html'
})
export class GooglePlacesComponent implements OnInit, AfterViewInit {
    @ViewChild('addresstext') addresstext: any;

    @Input() adressType: string = 'geocode';
    @Output() setAddress: EventEmitter<any> = new EventEmitter();

    autocompleteInput: string;
    queryWait: boolean;

    constructor() {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.getPlaceAutocomplete();
    }

    private getPlaceAutocomplete() {
        const autocomplete = new google.maps.places.Autocomplete(this.addresstext.nativeElement,
            {
                componentRestrictions: { country: 'US' },
                types: [this.adressType]  // 'establishment' / 'address' / 'geocode'
            });
        google.maps.event.addListener(autocomplete, 'place_changed', () => {
            const place = autocomplete.getPlace();
            this.setAddress.emit(place);
        });
    }
}
