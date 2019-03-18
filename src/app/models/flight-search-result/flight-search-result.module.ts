import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class FlightSearchResultModule {
  constructor(
    public result: {
      status: string,
      airItineraries: [
        {
          sequenceNum: number,
          isRefundable: boolean,
          itinTotalFare: {
            amount: any,
            currencyCode: string,
            totalTaxes: any
          },
          totalDuration: any,
          deptDate: any,
          arrivalDate: any,
          cabinClass: string,
          flightType: string,
          allJourney: {
            flights: [
              {
                flightDTO: [
                  {
                    isStopSegment: true,
                    deptTime: any,
                    landTime: any,
                    departureDate: any,
                    arrivalDate: any,
                    flightAirline: {
                      airlineCode: any,
                      airlineName: string,
                      airlineLogo: any,
                      alternativeBusinessName: any,
                      languageCode: string,
                      passportDetailsRequired: any,
                      airlineClass: any
                    },
                    operatedAirline: {
                      airlineCode: any,
                      airlineName: string,
                      airlineLogo: any,
                      alternativeBusinessName: string,
                      languageCode: string,
                      passportDetailsRequired: any,
                      airlineClass: string
                    },
                    durationPerLeg: any,
                    departureTerminalAirport: {
                      airportCode: any,
                      airportName: string,
                      cityName: string,
                      cityCode: string,
                      countryCode: string,
                      countryName: string,
                      regionName: string,
                    },
                    arrivalTerminalAirport: {
                      airportCode: any,
                      airportName: string,
                      cityName: string,
                      cityCode: string,
                      countryCode: any,
                      countryName: string,
                      regionName: any

                    },
                    transitTime: any,
                    flightInfo: {
                      flightNumber: any,
                      equipmentNumber: any,
                      mealCode: any,
                      bookingCode: any,
                      cabinClass: string
                    },
                    segmentDetails: {
                      uniqueKey: any,
                      baggage: any,
                      childBaggage: any,
                      infantBaggage: any,
                    }
                  }
                ]

              }
            ]
          },
          baggageInformation: [
            {
              baggage: string,
              childBaggage: any,
              infantBaggage: any,
              airlineName: string,
              deptCity: string,
              landCity: string,
              flightNum: any
            }
          ]

        }]
    }) { }
}

