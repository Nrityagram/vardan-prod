$(document).ready(function () {
  // Optimisation: Store the references outside the event handler:
  var $window = $(window);
  var mapOptions_desk = {
    center: [ 23.0, 14.0 ],
    // zoom: 2.5,
    zoom: 3.0,
    zoomSnap: 0.25,
    zoomDelta: 1.0,
    scrollWheelZoom: false,
    attributionControl: false,
    zoomControl: false,
  };
  var mapOptions_mob = {
    center: [ 23.0, 14.0 ],
    // zoom: 2.5,
    zoom: 3.0,
    zoomSnap: 0.25,
    zoomDelta: 1.0,
    scrollWheelZoom: true,
    attributionControl: false,
  };
  var deskmap = L.map("deskmapid", mapOptions_desk);
  var mobmap = L.map("mobmapid", mapOptions_mob);
  deskmap.fitBounds([
    // [57.7934, -152.4059],
    [ 44.715514, -158 ],
    // [-36.8481, 174.763],
    [ -26.8481, 163 ],
  ]); // Kodiak, Alaska to Auckland, NZ
  mobmap.fitBounds([
    [ 55.929475, -2.3859604 ],
    [ 5.5611863, 95.2935972 ],
  ]); // Scottish Borders, UK to Banda Aceh, Indonesia

  // Using new texture from ESRI

  var Esri_WorldImagery;
  Esri_WorldImagery = L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    {
      attribution:
        "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, GIS User Community",
    }
  ).addTo(deskmap);
  L.control
    .attribution({
      position: "bottomright",
    })
    .addTo(deskmap);
  // Fix position of Zoom Control (+/-) buttons
  L.control.zoom({ position: "topleft" }).addTo(deskmap);

  Esri_WorldImagery = L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    {
      attribution:
        "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, GIS User Community",
    }
  ).addTo(mobmap);
  L.control
    .attribution({
      position: "bottomright",
    })
    .addTo(mobmap);

  // Create a icon object using red colored map-pin SVG icon
  var redIcon = L.icon({
    iconUrl: "https://res.cloudinary.com/nrityagram/image/upload/v1647240589/ng_locationpin_thin_sml_qmgkfo.png",
    // iconSize: [22, 30], // size of the icon
    iconSize: [ 19, 26 ], // size of the icon
    // iconAnchor: [11, 30], // point of the icon which will correspond to marker's location
    iconAnchor: [ 9, 26 ], // point of the icon which will correspond to marker's location
    // popupAnchor: [0, -30], // point from which the popup should open relative to the iconAnchor
    popupAnchor: [ 0, -26 ], // point from which the popup should open relative to the iconAnchor
  });

  // Add markers to desk map
  // +++++++++++++++++  INDIA  +++++++++++++++++
  L.marker([ 12.97, 77.56 ], {
    icon: redIcon,
    title: "Bengaluru, India",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Bengaluru, India</city><production>Traditional Repertoire (Re-staged)</production><location>JN Tata Auditorium<date>17 FEB 1998</date></location><location>Ravindra Kalakshetra<date>5 NOV 1998</date></location><location>JN Tata Auditorium<date>15-16 NOV 1998</date></location><location>JN Tata Auditorium<date>28 NOV 1998</date></location><location>Chowdiah Memorial Hall<date>25 SEP 1999</date></location><location>Chowdiah Memorial Hall<date>2 OCT 1999</date></location><location>JN Tata Auditorium<date>1 DEC 2000</date></location><location>Guru Nanak Bhavan<date>25 JAN 2001</date></location><production>Surupa Solo</production><location>Bharatiya Vidya Bhavan<date>11 APR 1998</date></location><production>Śrī (Odissi)</production><location>JN Tata Auditorium<date>21 AUG 2001</date></location><location>JN Tata Auditorium<date>4 DEC 2001</date></location><location>Chowdiah Memorial Hall<date>15 JAN 2002</date></location><location>JN Tata Auditorium<date>14 FEB 2002</date></location><location>JN Tata Auditorium<date>15 FEB 2002</date></location><location>JN Tata Auditorium<date>9 JAN 2003</date></location><location>JN Tata Auditorium<date>12 JAN 2003</date></location><location>NIMHANS Auditorium<date>30 APR 2003</date></location><location>JN Tata Auditorium<date>26 NOV 2003</date></location><location>JN Tata Auditorium<date>17 DEC 2003</date></location><location>JN Tata Auditorium<date>7 JAN 2004</date></location><location>JN Tata Auditorium<date>21 FEB 2004</date></location><location>Chowdiah Memorial Hall<date>3 APR 2004</date></location><location>Bangalore Habba, Ravindra Kalakshetra<date>6 DEC 2004</date></location><production>Surupa & Bijayini</production><location>JN Tata Auditorium<date>9 NOV 2001</date></location><location>Bangalore Habba, Ravindra Kalakshetra<date>17 FEB 2009</date></location><location>JN Tata Auditorium<date>22 FEB 2009</date></location><production>Śrī: In Search of the Goddess</production><location>Attakkalari Biennale, Ravindra Kalakshetra<date>8 FEB 2002</date></location><location>Chowdiah Memorial Hall<date>25-26 JUL 2002</date></location><production>Pavithra Solo Debut</production><location>JN Tata Auditorium<date>27 DEC 2003</date></location><production>Pavithra Solo</production><location>Ananya Auditorium<date>SEP 2004</date></location><location>Gayana Samaj<date>5 NOV 2004</date></location><location>Ananya Nrithya Dhare, Seva Sadan<date>6-7 SEP 2008</date></location><location> ICCR Horizons Festival, Yavanika<date>28 MAY 2010</date></location><location>Naman Festival, ADA Rangamandira<date>28 JUL 2013</date></location><location>Ananya Nrithya Dhare, Seva Sadan<date>23 NOV 2013</date></location><production>Ansh</production><location>Chowdiah Memorial Hall<date>19 SEP 2005</date></location><location>JSS Auditorium<date>11 DEC 2005</date></location><location>JN Tata Auditorium<date>5 JUL 2007</date></location><location>Indiranagar Sangeet Sabha<date>25 JAN 2009</date></location><production>Bijayini Solo</production><location>Ravindra Kalakshetra<date>7 DEC 2006</date></location><production>Pratimā: Reflection</production><location>Attakkalari Biennale, Chowdiah Memorial Hall<date>9 FEB 2009</date></location><location>Nadam Festival, Chowdiah Hall<date>15 NOV 2009</date></location><location>JN Tata Auditorium<date>22 JAN 2010</date></location><location>Drishti Dance Festival, Chowdiah Hall<date>23 JAN 2010</date></location><location>ADA Rangamandira<date>18 JUL 2010</date></location><production>Śriyaḥ</production><location>JN Tata Auditorium<date>5 JAN 2011</date></location><location>Soorya Festival, Seva Sadan<date>16 SEP 2011</date></location><location>JN Tata Auditorium<date>20 AUG 2012</date></location><location>JN Tata Auditorium<date>2 DEC 2013</date></location><location>JN Tata Auditorium<date>27 NOV 2014</date></location><location>Bhoomija, MLR Convention Center<date>15 JAN 2017</date></location><location>Chowdiah Memorial Hall<date>5 MAY 2017</date></location><location>Chowdiah Memorial Hall<date>30 JUN 2017</date></location><location>JRD TATA Auditorium, NIAS<date>11 JAN 2019</date></location><location>Kalanadam at ADA Rangamandira<date>29 NOV 2019</date></location><location>JRD TATA Auditorium, NIAS<date>11 JAN 2020</date></location><location>Ritz Carlton<date>8 MAR 2020</date></location><location>Naman Festival at ADA Rangamandira<date>27 AUG 2023</date></location><production>Surupa & Pavithra</production><location>ICTS<date>11 FEB 2020</date></location><production>Saṃhāra</production><location>Chowdiah Memorial Hall<date>24 FEB 2012</date><emph>Premiere</emph></location><location>Chowdiah Memorial Hall<date>20 OCT 2012</date></location><location>Bhoomija, Chowdiah Memorial Hall<date>8 DEC 2012</date></location><location>Attakkalari Biennale, Chowdiah Memorial Hall<date>28 JAN 2013</date></location><location>Bhoomija Chowdiah Memorial Hall<date>19 MAY 2017</date></location><location>Bhoomija Chowdiah Memorial Hall<date>24 JAN 2018</date></location><location>Bhoomija Chowdiah Memorial Hall<date>16 SEP 2018</date></location><production>Saṃyoga</production><location>Chowdiah Memorial Hall<date>6 SEP 2012</date></location><location>Bhoomija, Jagriti Theatre<date>9 DEC 2012</date></location><location>Kinkini Festival, JSS Auditorium<date>30 JAN 2013</date></location><location>Indiranagar Sangeet Sabha<date>12 FEB 2013</date></location><location>Nimhans Auditorium<date>16 AUG 2013</date></location><location>Bhoomija, Chowdiah Memorial Hall<date>7 DEC 2013</date></location><location>JN Tata Auditorium<date>31 JAN 2014</date></location><location>Rangashankara<date>27 OCT 2014</date></location><production>NrityaUtsarga</production><location>Seva Sadan<date>18 AUG 2013</date></location><location>Bharatiya Vidya Bhavan<date>18 AUG 2014</date></location><location>Chowdiah Memorial Hall<date>18 AUG 2015</date></location><location>Sophia School Auditorium<date>18 AUG 2016</date></location><location>CES Auditorium<date>18 AUG 2018</date></location><location>Ambedkar Bhavan<date>18 AUG 2019</date></location><production>Songs of Love and Longing</production><location>Bhoomija, Jagriti Theatre<date>22 NOV 2013</date><emph>Premiere</emph></location><production>Yadunandana</production><location>Naman Festival, ADA Rangamandira<date>27 AUG 2017</date><emph>Premiere</emph></location><location>JNCASR Auditorium<date>20 FEB 2019</date></location><production>Āhuti</production><location>Bhoomija Chowdiah Memorial Hall<date>20 SEP 2019</date><emph>Premiere</emph></location><production>Vinati: Songs from the Gita Govinda</production><location>Bhoomija Chowdiah Memorial Hall<date>4 DEC 2021</date><emph>Premiere</emph></location><location>JNCASR Auditorium<date>7 DEC 2023</date></location><production>Āhuti Reimagined</production><location>Bhoomija Chowdiah Memorial Hall<date>25 SEP 2022 Premiere</date></location><location>Bhoomija Chowdiah Memorial Hall<date>12 APR 2024</date></location><production>Khaṅkhaṇā</production><location>Saranagati Dance Festival<date>26 JAN 2024</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Bengaluru
  L.marker([ 28.6, 77.2 ], {
    icon: redIcon,
    title: "New Delhi, India",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>New Delhi, India</city><production>Ensemble National Debut</production><location>British Council Theatre<date>24-25 SEP 1994</date></location><production>Surupa Solo Debut</production><location>Kamani Auditorium<date>22 MAR 1996</date></location><production>Traditional Repertoire (Re-staged)</production><location>Qutub Festival<date>25 OCT 1996</date></location><production>Surupa Solo</production><location>British Council Auditorium<date>14-15 DEC 1996</date></location><location>India International Center<date>13 JUN 1997</date></location><location>ICGEB Auditorium<date>11 NOV 2002</date></location><location>Meghdoot Theatre<date>17 FEB 2012</date></location><production>Bijayini Solo Debut</production><location>Kamani Auditorium<date>5 MAR 1997</date></location><production>Bijayini Solo</production><location>India International Center<date>2 MAY 1998</date></location><location>Parampara Festival, Kamani Auditorium<date>1 OCT 2004</date></location><location>Meghdoot Theatre<date>26 MAR 2007</date></location><production>Śrī: In Search of the Goddess</production><location>Kamani Auditorium<date>3-4 MAY 2001</date><emph>Premiere</emph></location><production>Śrī (Odissi)</production><location>Kamani Auditorium<date>11 MAY 2003</date></location><production>Surupa & Bijayini</production><location>Stein Auditorium, India Habitat Center<date>11 NOV 2003</date></location><location>Odissi International Festival, Kamani Auditorium<date>26 NOV 2006</date></location><location>Stein Auditorium, India Habitat Center<date>3 NOV 2008</date></location><production>Ansh</production><location>Kamani Auditorium<date>12 SEP 2005</date></location><location>India International Centre<date>24 OCT 2007</date></location><production>Sacred Space</production><location>Purana Qila Festival<date>12 OCT 2006</date></location><production>Pratimā: Reflection</production><location>Kamani Auditorium<date>15 SEP 2010</date></location><production>Saṃhāra</production><location>IGNITE Festival, Kamani Auditorium<date>4 NOV 2012</date></location><production>Saṃyoga</production><location>Divinity Series, Kamani Auditorium<date>27 SEP 2014</date></location><production>Pavithra Solo</production><location>Stein Auditorium, India Habitat Centre<date>5 OCT 2017</date></location><production>Āhuti</production><location>Stein Auditorium<date>25 JAN 2023</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Delhi
  L.marker([ 13.09, 80.28 ], {
    icon: redIcon,
    title: "Chennai, India",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Chennai, India</city><production>Traditional Repertoire (Re-staged)</production><location>Sri Krishna Gana Sabha<date>DEC 1994</date></location><production>Surupa & Bijayini for Maami</production><location>Sri Krishna Gana Sabha<date>25 DEC 1998</date></location><production>Śrī (Odissi)</production><location>Marga Festival, Bharatiya Vidya Bhavan<date>28 NOV 2002</date></location><location>Madras Music Academy<date>2 JAN 2005</date></location><production>Surupa & Bijayini</production><location>Sri Krishna Gana Sabha<date>23 DEC 2003</date></location><location>Sri Krishna Gana Sabha<date>9 DEC 2004</date></location><location>Karthik Fine Arts, Narada Gana Sabha<date>13 DEC 2004</date></location><location>Sri Krishna Gana Sabha<date>15 DEC 2005</date></location><location>Sri Krishna Gana Sabha<date>13 DEC 2006</date></location><location>Sri Krishna Gana Sabha<date>21 DEC 2008</date></location><location>Bharat Kalachar Festival<date>14 JAN 2009</date></location><location>Bharat Kalachar Festival<date>6 DEC 2009</date></location><location>Bharat Kalachar Festival<date>11 DEC 2010</date></location><location>Sri Krishna Gana Sabha<date>26 DEC 2010</date></location><location>Sri Krishna Gana Sabha<date>25 DEC 2011</date></location><location>Madras Music Academy<date>9 JAN 2012</date></location><production>Ansh</production><location>Madras Music Academy<date>2 JAN 2005</date><emph>Premiere</emph></location><location>Madras Music Academy<date>6 JAN 2007</date></location><location>Rukmini Arangham, Kalakshetra<date>23 DEC 2007</date></location><production>Sacred Space</production><location>Madras Music Academy<date>19 DEC 2005</date><emph>Premiere</emph></location><production>Nrityagram Odissi Repertoire</production><location>Madras Music Academy<date>6 OCT 2007</date></location><location>Madras Music Academy<date>9 JAN 2008</date></location><production>Pratimā: Reflection</production><location>Madras Music Academy<date>9 JAN 2009</date></location><location>Association of British Scholars, Chinmaya Hall<date>1 AUG 2009</date></location><production>Śriyaḥ</production><location>Madras Music Academy<date>9 JAN 2011</date></location><location>Rukmini Arangham, Kalakshetra<date>22 DEC 2013</date></location><location>Sri Krishna Gana Sabha<date>27 DEC 2014</date></location><location>Madras Music Academy<date>5 JAN 2016</date></location><location>Madras Music Academy<date>9 JAN 2017</date></location><location>Madras Music Academy<date>9 JAN 2018</date></location><location>Madras Music Academy<date>9 JAN 2019</date></location><production>Saṃhāra</production><location>Madras Music Academy<date>9 JAN 2013</date></location><production>Surupa & Bijayini</production><location>Kapaleeswarar Temple<date>12 JAN 2013</date></location><production>Saṃyoga</production><location>Madras Music Academy<date>9 JAN 2014</date></location><production>Songs of Love and Longing</production><location>Madras Music Academy<date>5 JAN 2015</date></location><production>Yadunandana</production><location>Sri Krishna Gana Sabha<date>22 DEC 2018</date></location><production>Surupa & Pavithra</production><location>Sri Krishna Gana Sabha<date>22 DEC 2019</date></location><production>Āhuti</production><location>Madras Music Academy<date>15 JAN 2023</date></location><production>Pavithra & Anoushka</production><location>Sri Krishna Gana Sabha<date>13 JAN 2024</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Chennai
  L.marker([ 19.017, 72.857 ], {
    icon: redIcon,
    title: "Mumbai, India",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Mumbai, India</city><production>Traditional Repertoire (Re-staged)</production><location>Nehru Centre<date>SEP 1995</date></location><production>Śrī (Odissi)</production><location>Homi Bhabha Auditorium<date>18 DEC 2002</date></location><location>Kalaghoda Festival<date>15 FEB 2003</date></location><production>Pratimā: Reflection</production><location>Kala Ghoda Festival<date>14 FEB 2010</date></location><production>Surupa & Bijayini</production><location>NCPA Experimental Theatre<date>16 FEB 2010</date></location><production>Saṃyoga</production><location>NCPA Tata Theatre<date>25 AUG 2012</date><emph>Premiere</emph></location><production>Saṃhãra</production><location>NCPA Jamshed Bhaba Theatre<date>2 SEP 2012</date></location><production>Songs of Love and Longing</production><location>NCPA TATA Theatre<date>25 APR 2015</date></location><production>Śriyaḥ</production><location>NCPA TATA Theatre<date>27 JAN 2017</date></location><location>NCPA TATA Theatre<date>22 APR 2017</date></location><location>NCPA TATA Theatre<date>1 DEC 2019</date></location><production>Āhuti</production><location>NCPA Jamshed Bhabha Theatre<date>10 AUG 2023</date></location><production>Khaṅkhaṇā</production><location>Kala Ghoda Arts Festival<date>20 JAN 2024</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Mumbai
  L.marker([ 20.296059, 85.824539 ], {
    icon: redIcon,
    title: "Bhubaneswar, India",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Bhubaneswar, India</city><production>Traditional Repertoire (Re-staged)</production><location>Konarak Natya Mandap<date>MAR 1994</date></location><production>Śrī (Odissi)</production><location>Rabindra Mandap<date>17-18 DEC 2004</date></location><production>Pratimā: Reflection</production><location>Dhauli Festival<date>14 DEC 2009</date></location><production>Surupa & Bijayini</production><location>Mukteshwar Festival<date>14 JAN 2011</date></location><production>Bijayini Solo</production><location>Rabindra Mandap<date>5 SEP 2013</date></location><location>Mukteshwar Festival<date>15 JAN 2016</date></location><production>Pavithra Solo</production><location>Rabindra Mandap<date>JUL 2014</date></location><production>Yadunandana</production><location>Mukteshwar Festival<date>14 JAN 2019</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Bhubaneswar
  L.marker([ 26.916129, 75.820406 ], {
    icon: redIcon,
    title: "Jaipur, India",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Jaipur, India</city><production>Traditional Repertoire (Re-staged)</production><location>Amber Festival<date>27 OCT 1996</date></location><production>Śrī (Odissi)</production><location>Jaipur Heritage International Festival<date>17 JAN 2004</date></location><production>Bijayini Solo</production><location>Jaipur Heritage International Festival<date>15-16 JAN 2005</date></location><production>Āhuti</production><location>Amber Fort for Jaipur Lit Fest<date>22 JAN 2023</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Jaipur
  L.marker([ 24.851513, 79.925979 ], {
    icon: redIcon,
    title: "Khajuraho, India",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Khajuraho, India</city><production>Protima Bedi & Ensemble</production><location>Khajuraho Dance Festival<date>FEB 1995</date></location><production>Ansh</production><location>Khajuraho Dance Festival<date>27 FEB 2005</date></location><production>Surupa & Bijayini</production><location>Khajuraho Dance Festival<date>7 FEB 2011</date></location><production>Saṃyoga</production><location>Khajuraho Festival<date>26 FEB 2014</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Khajuraho
  L.marker([ 21.149804, 79.080609 ], {
    icon: redIcon,
    title: "Nagpur, India",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Nagpur, India</city><production>Surupa Solo</production><location>Dr. V Deshpande Smruthi Sangeet Samaroaha<date>29 July 1996</date></location><production>Bijayini Solo</production><location>Kalidas Festival<date>15 NOV 2005</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Nagpur
  L.marker([ 12.9101, 75.003 ], {
    icon: redIcon,
    title: "Moodbidri, India",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Moodbidri, India</city><production>Sacred Space</production><location>Alva’s Virasat Festival<date>6 JAN 2006</date></location><production>Ansh</production><location>Alva’s Virasat Festival<date>7 JAN 2007</date></location><production>Pratimā: Reflection</production><location>Alva’s Virasat Festival<date>10 JAN 2010</date></location><production>Śriyaḥ</production><location>Alva’s Virasat Festival<date>20 DEC 2013</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Moodbidri
  L.marker([ 19.890833, 86.100278 ], {
    icon: redIcon,
    title: "Konarak, India",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Konarak, India</city><production>Sacred Space</production><location>Konarak Festival<date>2 DEC 2006</date></location><production>Saṃhāra</production><location>Konarak Festival<date>4 DEC 2012</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Konarak
  L.marker([ 13.341917, 74.747323 ], {
    icon: redIcon,
    title: "Udupi, India",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Udupi, India</city><production>Ansh</production><location>Udupi Temple<date>22 JAN 2008</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Udupi
  L.marker([ 16.254821, 80.920464 ], {
    icon: redIcon,
    title: "Kuchipudi, India",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Kuchipudi, India</city><production>Nrityagram Odissi Repertoire</production><location>Kuchipudi Festival<date>6 JAN 2009</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Kuchipudi
  L.marker([ 9.963386, 76.253661 ], {
    icon: redIcon,
    title: "Cochin, India",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Cochin, India</city><production>Śrī: In Search of the Goddess</production><location>Kerala Fine Arts Hall<date>28 JUL 2001</date></location><production>Śrī (Odissi)</production><location>Soorya Festival<date>5 OCT 2002</date></location><production>Pratimā: Reflection</production><location>Dharini Festival<date>1 NOV 2009</date></location><production>Surupa Solo</production><location>Sangeet Natak Academy<date>22 JAN 2011</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Cochin
  L.marker([ 8.505749, 76.957356 ], {
    icon: redIcon,
    title: "Trivandrum, India",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Trivandrum, India</city><production>Traditional Repertoire (Re-staged)</production><location>Soorya Festival<date>2 OCT 1998</date></location><production>Śrī (Odissi)</production><location>Soorya Festival<date>2 OCT 2002</date></location><production>Pratimā: Reflection</production><location>Soorya Festival<date>5 JAN 2010</date></location><location>Soorya Festival<date>2 OCT 2010</date></location><production>Śriyaḥ</production><location>Soorya Festival<date>7 OCT 2011</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Trivandrum
  L.marker([ 22.720385, 75.86821 ], {
    icon: redIcon,
    title: "Indore, India",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Indore, India</city><production>Traditional Repertoire (Re-staged)</production><location><date>FEB 1997</date></location><production>Nrityagram Odissi Repertoire</production><location>Chhandak Festival<date>4 JUL 2010</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Indore
  L.marker([ 18.520644, 73.854405 ], {
    icon: redIcon,
    title: "Pune, India",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Pune, India</city><production>Surupa Solo</production><location>The Buddha Hall, Osho Ashram<date>JUL 1997</date></location><production>Bijayini Solo</production><location>The Buddha Hall, Osho Ashram<date>JUL 1999</date></location><production>Surupa & Bijayini</production><location>Chinmaya Nada Bindu<date>20 SEP 2010</date></location><production>Songs of Love and Longing</production><location>Prayatna Dance Festival, Bal Gandharwa<date>28 APR 2015</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Pune
  L.marker([ 10.775923, 76.643801 ], {
    icon: redIcon,
    title: "Palakkad, India",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Palakkad, India</city><production>Śrī (Odissi)</production><location>Soorya Festival<date>4 OCT 2002</date></location><production>Pratimā: Reflection</production><location>Soorya Festival<date>1 OCT 2010</date></location><production>Śriyaḥ</production><location>Soorya Festival<date>8 OCT 2011</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Palakkad
  L.marker([ 10.52519, 76.215983 ], {
    icon: redIcon,
    title: "Thrissur, India",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Thrissur, India</city><production>Śrī (Odissi)</production><location>Soorya Festival<date>3 OCT 2002</date></location><production>Pratimā: Reflection</production><location>Soorya Festival<date>5 OCT 2010</date></location><production>Śriyaḥ</production><location>Soorya Festival<date>4 OCT 2011</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Thrissur
  L.marker([ 23.260663, 77.39406 ], {
    icon: redIcon,
    title: "Bhopal, India",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Bhopal, India</city><production>Śriyaḥ</production><location>Bharat Bhavan<date>14 FEB 2011</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Bhopal
  L.marker([ 11.244614, 75.775937 ], {
    icon: redIcon,
    title: "Kozhikode, India",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Kozhikode, India</city><production>Śrī (Odissi)</production><location>Soorya Festival<date>7 OCT 2002</date></location><production>Śriyaḥ</production><location>Soorya Festival<date>1 OCT 2011</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Kozhikode
  L.marker([ 11.876225, 75.373804 ], {
    icon: redIcon,
    title: "Kannur, India",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Kannur, India</city><production>Śriyaḥ</production><location>Soorya Festival<date>2 OCT 2011</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Kannur
  L.marker([ 9.988381, 76.286344 ], {
    icon: redIcon,
    title: "Ernakulam, India",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Ernakulam, India</city><production>Śriyaḥ</production><location>Soorya Festival<date>5 OCT 2011</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Ernakulam
  L.marker([ 9.849787, 76.979791 ], {
    icon: redIcon,
    title: "Idukki, India",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Idukki, India</city><production>Śriyaḥ</production><location>Soorya Festival<date>11 OCT 2011</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Idukki
  L.marker([ 24.578723, 73.686255 ], {
    icon: redIcon,
    title: "Udaipur, India",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Udaipur, India</city><production>Surupa & Bijayini</production><location>Mewar Foundation, Jag Mandir Palace<date>10 NOV 2011</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Udaipur
  L.marker([ 17.361623, 78.474731 ], {
    icon: redIcon,
    title: "Hyderabad, India",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Hyderabad, India</city><production>Surupa Solo</production><location>Ravindra Bharati<date>26 JAN 2000</date></location><production>Śrī (Odissi)</production><location>Shilparaman<date>3 DEC 2003</date></location><production>Śriyaḥ</production><location>Ravindra Bharathi<date>15 DEC 2011</date></location><location>Ravindra Bharathi<date>6 DEC 2014</date></location><location>Gudi Sambaraalu, Sri Lakshmanji Maharaj Temple<date>31 JAN 2016</date></location><production>Saṃhāra</production><location>Gudi Sambaraalu, Shamshabad Rama Temple<date>20 JAN 2018</date></location><production>Āhuti</production><location>Gudi Sambaraalu, Central Park<date>9 APR 2024</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Hyderabad
  L.marker([ 18.673269, 78.097848 ], {
    icon: redIcon,
    title: "Nizamabad, India",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Nizamabad, India</city><production>Śriyaḥ</production><location>Gudi Sambaraalu, Khilla Ramalayam Temple<date>4-5 FEB 2017</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Nizamabad
  L.marker([ 11.001812, 76.962843 ], {
    icon: redIcon,
    title: "Coimbatore, India",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Coimbatore, India</city><production>Saṃyoga</production><location>Yaksha Festival, Isha Yoga Center<date>23 FEB 2017</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Coimbatore
  L.marker([ 14.449372, 79.987376 ], {
    icon: redIcon,
    title: "Nellore, India",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Nellore, India</city><production>Saṃhāra</production><location>Gudi Sambaraalu, Rajarajeshwari Temple<date>13 JAN 2018</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Nellore
  L.marker([ 16.508759, 80.61851 ], {
    icon: redIcon,
    title: "Vijayawada, India",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Vijayawada, India</city><production>Saṃhāra</production><location>Gudi Sambaraalu, Rama Lingeshwara Swamy Temple<date>15 JAN 2018</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Vijayawada
  L.marker([ 26.8381, 80.9346 ], {
    icon: redIcon,
    title: "Lucknow, India",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Lucknow, India</city><production>Traditional Repertoire (Re-staged)</production><location>Lucknow Mahotsav<date>29 NOV 1999</date></location><production>Śriyaḥ</production><location>Sanatkada Festival<date>2 FEB 2018</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Lucknow
  L.marker([ 15.498992, 73.828214 ], {
    icon: redIcon,
    title: "Panaji, India",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Panaji, India</city><production>Śriyaḥ</production><location>Serendipity Arts Festival<date>15 DEC 2018</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Panaji
  L.marker([ 30.720451, 76.76697 ], {
    icon: redIcon,
    title: "Chandigarh, India",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Chandigarh, India</city><production>Protima Bedi & Ensemble</production><location>Tagore Theater<date>26 FEB 1995</date></location><location>Rose Festival<date>27 FEB 1998</date></location><production>Surupa Solo</production><location>Tagore Theater<date>21 FEB 1998</date></location><location>Tagore Theater<date>9 OCT 1999</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Chandigarh
  L.marker([ 23.021624, 72.579707 ], {
    icon: redIcon,
    title: "Ahmedabad, India",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Ahmedabad, India</city><production>Traditional Repertoire (Re-staged)</production><location>Tagore Hall<date>21 FEB 1997</date></location><production>Ansh</production><location>Tagore Hall<date>10 FEB 2007</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Ahmedabad
  L.marker([ 8.887094, 76.590684 ], {
    icon: redIcon,
    title: "Kollam, India",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Kollam, India</city><production>Traditional Repertoire (Re-staged)</production><location>Soorya Festival<date>3 OCT 1998</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Kollam
  L.marker([ 13.931172, 75.569737 ], {
    icon: redIcon,
    title: "Shimoga, India",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Shimoga, India</city><production>Śrī (Odissi)</production><location>Ninasam<date>17 OCT 2002</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Shimoga
  L.marker([ 12.951, 75.371 ], {
    icon: redIcon,
    title: "Dharmasthala, India",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Dharmasthala, India</city><production>Ansh</production><location>Nadavalli Festival<date>22 FEB 2005</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Dharmasthala
  L.marker([ 15.334444, 76.462222 ], {
    icon: redIcon,
    title: "Hampi, India",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Hampi, India</city><production>Bijayini Solo</production><location>Hampi Festival<date>25 JAN 2014</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Hampi
  L.marker([ 13.161, 77.45 ], {
    icon: redIcon,
    title: "Nrityagram Amphitheatre, India",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Nrityagram Amphitheatre, India</city><production>Vasantahabba</production><location>Amphitheatre Nrityagram<date>5 FEB 1994</date></location><location>Amphitheatre Nrityagram<date>4 FEB 1995</date></location><location>Amphitheatre Nrityagram<date>10 FEB 1996</date></location><location>Amphitheatre Nrityagram<date>6 FEB 1999</date></location><location>Amphitheatre Nrityagram<date>3 FEB 2001</date></location><location>Amphitheatre Nrityagram<date>2 FEB 2002</date></location><location>Amphitheatre Nrityagram<date>1 FEB 2003</date></location><location>Amphitheatre Nrityagram<date>7 FEB 2004</date></location><production>Surupa Solo at Vasantahabba</production><location>Amphitheatre Nrityagram<date>1 FEB 1997</date></location><production>Bijayini Solo at Vasantahabba</production><location>Amphitheatre Nrityagram<date>7 FEB 1998</date></location><production>NrityaUtsarga</production><location>Amphitheatre Nrityagram<date>18 AUG 2017</date></location><location>Amphitheatre Nrityagram<date>29 DEC 2017</date></location><production>NrityaUtsarga.Digital</production><location>Nrityagram Online<date>18 AUG 2020</date></location><location>Nrityagram Online<date>18 AUG 2021</date></location>",
      {
        maxHeight: 200,
        maxWidth: 300,
      }
    ); // Nrityagram Amphitheatre
  L.marker([ 12.86981, 74.843008 ], {
    icon: redIcon,
    title: "Mangalore, India",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Mangalore, India</city><production>Bijayini Solo</production><location>Nupura Utsav, Town Hall<date>30 OCT 2004</date></location>",
      {
        maxHeight: 200,
        maxWidth: 300,
      }
    ); // Mangalore
  L.marker([ 22.11, 75.35 ], {
    icon: redIcon,
    title: "Maheswar, India",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Maheswar, India</city><production>Traditional Repertoire (Re-staged)</production><location><date>FEB 1997</date></location><production>Ansh</production><location>Sacred River Festival, Maheshwar Fort<date>18 FEB 2007</date></location>",
      {
        maxHeight: 200,
        maxWidth: 300,
      }
    ); // Maheswar
  L.marker([ 22.245583, 76.151056 ], {
    icon: redIcon,
    title: "Omkareshwar, India",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Omkareshwar, India</city><production>Traditional Repertoire (Re-staged)</production><location><date>FEB 1997</date></location>",
      {
        maxHeight: 200,
        maxWidth: 300,
      }
    ); // Omkareshwar
  L.marker([ 22.335278, 75.415833 ], {
    icon: redIcon,
    title: "Mandu, India",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Mandu, India</city><production>Traditional Repertoire (Re-staged)</production><location><date>FEB 1997</date></location>",
      {
        maxHeight: 200,
        maxWidth: 300,
      }
    ); // Mandu
  L.marker([ 18.763, 73.557 ], {
    icon: redIcon,
    title: "Kamshet, India",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Kamshet, India</city><production>Bijayini Solo</production><location>Kamshet Arts Festival<date>1 MAR 2014</date></location>",
      {
        maxHeight: 200,
        maxWidth: 300,
      }
    ); // Kamshet
  L.marker([ 19.873954, 75.32778 ], {
    icon: redIcon,
    title: "Aurangabad, India",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Aurangabad, India</city><production>Surupa & Bijayini</production><location>Ellora Festival<date>21 DEC 2002</date></location>",
      {
        maxHeight: 200,
        maxWidth: 300,
      }
    ); // Aurangabad
  L.marker([ 27.175255, 78.009816 ], {
    icon: redIcon,
    title: "Agra, India",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Agra, India</city><production>Protima Bedi & Ensemble</production><location>TAJ Mahotsav<date>FEB 1995</date></location>",
      {
        maxHeight: 200,
        maxWidth: 300,
      }
    ); // Agra

  // +++++++++++++++++  NORTH AMERICA  +++++++++++++++++
  L.marker([ 40.7834, -73.9662 ], {
    icon: redIcon,
    title: "New York NY, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>New York, NY, USA</city><production>Ensemble NY Debut</production><location>Kaye Playhouse, Hunter College<date>18 JUN 1996</date></location><production>NDE 1 & 2 Traditional Repertoire (Re-staged)</production><location>Waldorf Astoria<date>15 AUG 1997</date></location><location>Downtown Dance Festival, Battery Park<date>27 AUG 1997</date></location><location>Symphony Space<date>4 OCT 1997</date></location><production>Traditional Repertoire (Re-staged)</production><location>Kaye Playhouse, Hunter College<date>8 JAN 1999</date></location><location>Queens Theatre in the Park<date>16-17 JAN 1999</date></location><production>Śrī: In Search of the Goddess</production><location>Symphony Space<date>20-21 APR 2002</date></location><production>Śrī (Odissi)</production><location>Central Park SummerStage<date>9 JUL 2003</date></location><production>Ansh</production><location>Joyce Theater<date>12-17 APR 2005</date></location><production>Sacred Space</production><location>NYU Skirball Center for the Performing Arts<date>12-13 MAY 2006</date></location><production>Pratimā: Reflection</production><location>Joyce Theater<date>19-24 FEB 2008</date><emph>Premiere</emph></location><production>Saṃhāra</production><location>Joyce Theater<date>20-25 MAR 2012</date></location><location>Queens Theatre in the Park<date>29-30 SEP 2018</date></location><production>Saṃyoga</production><location>NYU Skirball Center for the Performing Arts<date>6-7 APR 2013</date></location><location>Temple of Dendur, MET Museum<date>11 JAN 2015</date></location><production>Vibhakta</production><location>Fall for Dance at City Centre<date>27-28 SEP 2013</date></location><production>Songs of Love and Longing</production><location>Baryshnikov Arts Center<date>1-2 MAY 2014</date></location><production>Shivashtakam</production><location>Fall for Dance at City Center<date>8-9 OCT 2015</date></location><production>Śriyaḥ</production><location>Lincoln Center's White Light Festival<date>2 & 4 OCT 2016</date></location><production>Saṃhāra Revisited</production><location>The Temple of Dendur, MET Museum<date>27-28 OCT 2018</date></location><production>Poornāratī Āhuti</production><location>Fall for Dance at City Center<date>1-2 OCT 2022</date></location><production>Āhuti</production><location>Joyce Theater<date>9-14 MAY 2023</date></location><production>APAP Showcase.Digital</production><location>APAP Online<date>7 JAN 2021</date></location><location>APAP Online<date>11 JAN 2022</date></location><production>Vinati.Digital</production><location>World Music Institute Online<date>23 MAY 2021</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // New York
  L.marker([ 51.046362, -114.05803 ], {
    icon: redIcon,
    title: "Calgary AL, Canada",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Calgary AL, Canada</city><production>Protima Bedi & Party</production><location><date>SEP 1993</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Calgary AL, Canada
  L.marker([ 39.744432, -75.5451 ], {
    icon: redIcon,
    title: "Wilmington DE, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Wilmington DE, USA</city><production>Protima Bedi & Party</production><location><date>SEP 1993</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Wilmington DE, USA
  L.marker([ 38.186901, -76.4347 ], {
    icon: redIcon,
    title: "St. Mary's City MD, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>St. Mary's City MD, USA</city><production>Protima Bedi & Party</production><location>St. Mary’s College<date>OCT 1993</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // St. Mary's City, USA
  L.marker([ 38.892062, -77.019912 ], {
    icon: redIcon,
    title: "Washington DC, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Washington DC, USA</city><production>Sacred Space</production><location>National Geographic Conference<date>3 MAY 2006</date></location><production>Śriyaḥ</production><location>Kennedy Center for the Performing Arts<date>6 MAR 2011</date></location><production>Saṃyoga</production><location>Kennedy Center for the Performing Arts<date>21 SEP 2013</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Washington DC, USA
  L.marker([ 41.675032, -86.251962 ], {
    icon: redIcon,
    title: "South Bend IN, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>South Bend IN, USA</city><production>Protima Bedi & Party</production><location>O’Laughlin Auditorium, St. Mary’s College<date>OCT 1993</date></location><production>Traditional Repertoire (Re-staged)</production><location>O’Laughlin Auditorium, St. Mary’s College<date>21 APR 1996</date></location><location>Notre Dame University<date>4 MAY 1996</date></location><production>NDE 2 + Surupa</production><location>Notre Dame University<date>29 AUG 1997</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // South Bend IN, USA
  L.marker([ 43.073926, -89.385244 ], {
    icon: redIcon,
    title: "Madison WI, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Madison WI, USA</city><production>Protima Bedi & Party</production><location>Wisconsin Union Theater<date>16 OCT 1993</date></location><production>Pratimā: Reflection</production><location>Wisconsin Union Theater<date>6 MAR 2010</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Madison WI, USA
  L.marker([ 41.051924, -73.539475 ], {
    icon: redIcon,
    title: "Stamford CT, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Stamford CT, USA</city><production>Traditional Repertoire (Re-staged)</production><location><date>16 JUN 1996</date></location><production>NDE 1 & 2 Traditional Repertoire (Re-staged)</production><location>Stamford Performing Arts Center<date>9 SEP 1997</date></location><production>Śrī: In Search of the Goddess</production><location>Rich Forum, Stamford Center for the Arts<date>2 MAY 2002</date></location><production>Sacred Space</production><location>Rich Forum, Stamford Center for the Arts<date>6 AUG 2006</date></location><production>Pratimā: Reflection</production><location>The Palace Theatre, Stamford Center for the Arts<date>29 FEB 2008</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Stamford CT, USA
  L.marker([ 42.887691, -78.879374 ], {
    icon: redIcon,
    title: "Buffalo NY, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Buffalo NY, USA</city><production>Protima Bedi & Party</production><location><date>OCT 1993</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Buffalo NY, USA
  L.marker([ 33.522859, -86.807705 ], {
    icon: redIcon,
    title: "Birmingham AL, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Birmingham AL, USA</city><production>Protima Bedi & Party</production><location><date>OCT 1993</date></location><production>Traditional Repertoire (Re-staged)</production><location><date>18 MAY 1996</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Birmingham AL, USA
  L.marker([ 47.035534, -122.900827 ], {
    icon: redIcon,
    title: "Olympia WA, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Olympia WA, USA</city><production>Protima Bedi & Party</production><location>Evergreen State College<date>NOV 1993</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Olympia WA, USA
  L.marker([ 34.576469, -118.116103 ], {
    icon: redIcon,
    title: "Palmdale CA, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Palmdale CA, USA</city><production>Protima Bedi & Party</production><location><date>NOV 1993</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Palmdale CA, USA
  L.marker([ 37.445103, -122.160363 ], {
    icon: redIcon,
    title: "Palo Alto CA, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Palo Alto CA, USA</city><production>Protima Bedi & Party</production><location><date>NOV 1993</date></location><production>Traditional Repertoire (Re-staged)</production><location><date>MAR 2000</date></location><production>Saṃyoga</production><location>Bing Concert Hall, Stanford University<date>26 SEP 2015</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Palo Alto CA, USA
  L.marker([ 36.731654, -119.785856 ], {
    icon: redIcon,
    title: "Fresno CA, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Fresno CA, USA</city><production>Traditional Repertoire (Re-staged)</production><location><date>MAY 1996</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Fresno CA, USA
  L.marker([ 43.155708, -77.612547 ], {
    icon: redIcon,
    title: "Rochester NY, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Rochester NY, USA</city><production>Traditional Repertoire (Re-staged)</production><location>Rochester University<date>13 SEP 1997</date></location><location>Nazareth College<date>12 NOV 1999</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Rochester NY, USA
  L.marker([ 29.651958, -82.325024 ], {
    icon: redIcon,
    title: "Gainesville FL, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Gainesville FL, USA</city><production>Traditional Repertoire (Re-staged)</production><location>University of Florida<date>21 SEP 1997</date></location><production>Sacred Space</production><location>University of Florida Performing Arts<date>1 APR 2006</date></location><production>Āhuti</production><location>Phillips Center<date>22 APR 2023</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Gainesville FL, USA
  L.marker([ 37.028265, -76.342338 ], {
    icon: redIcon,
    title: "Hampton VA, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Hampton VA, USA</city><production>Traditional Repertoire (Re-staged)</production><location>Ogden Hall, Hampton Arts Commission<date>27 SEP 1997</date></location><production>Sacred Space</production><location>American Theatre, Hampton Arts Commission<date>9-10 MAY 2006</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Hampton VA, USA
  L.marker([ 40.925686, -73.141129 ], {
    icon: redIcon,
    title: "Stony Brook NY, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Stony Brook NY, USA</city><production>Traditional Repertoire (Re-staged)</production><location>Staller Center, SUNY<date>18 OCT 1997</date></location><production>Pratimā: Reflection</production><location>Charles B. Wang Center, Stony Brook University<date>13 APR 2008</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Stony Brook NY, USA
  L.marker([ 40.950936, -73.734667 ], {
    icon: redIcon,
    title: "Mamaroneck NY, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Mamaroneck NY, USA</city><production>Traditional Repertoire (Re-staged)</production><location>Emelin Theater<date>27 OCT 1997</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Mamaroneck NY, USA
  L.marker([ 26.609859, -80.058568 ], {
    icon: redIcon,
    title: "Lake Worth FL, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Lake Worth FL, USA</city><production>Traditional Repertoire (Re-staged)</production><location>Duncan Theater<date>5 MAR 1999</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Lake Worth FL, USA
  L.marker([ 40.79664, -74.481595 ], {
    icon: redIcon,
    title: "Morristown NJ, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Morristown NJ, USA</city><production>Traditional Repertoire (Re-staged)</production><location>Community Theater<date>9 MAR 1999</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Morristown NJ, USA
  L.marker([ 43.75088, -87.712907 ], {
    icon: redIcon,
    title: "Sheboygan WI, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Sheboygan WI, USA</city><production>Traditional Repertoire (Re-staged)</production><location>Kohler Arts Center<date>19 MAR 1999</date></location><production>Śrī: In Search of the Goddess</production><location>JMKAC Auditorium, John Michael Kohler Arts Center<date>11 APR 2002</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Sheboygan WI, USA
  L.marker([ 41.852223, -88.312268 ], {
    icon: redIcon,
    title: "Batavia IL, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Batavia IL, USA</city><production>Traditional Repertoire (Re-staged)</production><location>Ramsey Auditorium, Fermilab<date>27 MAR 1999</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Batavia IL, USA
  L.marker([ 45.679294, -111.046611 ], {
    icon: redIcon,
    title: "Bozeman MT, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Bozeman MT, USA</city><production>Traditional Repertoire (Re-staged)</production><location>Emerson Cultural Center<date>2 APR 1999</date></location><location>Emerson Cultural Center<date>31 MAR 2000</date></location><production>Saṃyoga</production><location>Ellen Theatre<date>15 APR 2014</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Bozeman MT, USA
  L.marker([ 47.25308, -122.44153 ], {
    icon: redIcon,
    title: "Tacoma WA, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Tacoma WA, USA</city><production>Traditional Repertoire (Re-staged)</production><location>Broadway Center for the Arts<date>9 APR 1999</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Tacoma WA, USA
  L.marker([ 38.546421, -121.745384 ], {
    icon: redIcon,
    title: "Davis CA, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Davis CA, USA</city><production>Traditional Repertoire (Re-staged)</production><location>Freeborn Hall, University of California<date>16 APR 1999</date></location><production>Sacred Space</production><location>University of California<date>1-2 MAR 2006</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Davis CA, USA
  L.marker([ 41.505546, -81.6915 ], {
    icon: redIcon,
    title: "Cleveland OH, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Cleveland OH, USA</city><production>Traditional Repertoire (Re-staged)</production><location>Gartner Auditorium, Cleveland Museum of Art<date>19 NOV 1999</date></location><production>Śrī: In Search of the Goddess</production><location>Gartner Auditorium, Cleveland Museum of Art<date>8 MAR 2002</date></location><production>Śriyaḥ</production><location>Gartner Auditorium, Cleveland Museum of Art<date>11 MAR 2011</date></location><production>Saṃyoga</production><location>Gartner Auditorium, Cleveland Museum of Art<date>10-11 APR 2014</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Cleveland OH, USA
  L.marker([ 25.775084, -80.194702 ], {
    icon: redIcon,
    title: "Miami FL, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Miami FL, USA</city><production>Traditional Repertoire (Re-staged)</production><location>The Colony Theater, Miami Beach<date>25 NOV 1999</date></location><location>The Colony Theater, Miami Beach<date>27 FEB 2000</date></location><production>Śrī: In Search of the Goddess</production><location>New World Symphony, Miami Beach<date>17 MAR 2002</date></location><production>Sacred Space</production><location>The Colony Theater, Miami Beach<date>7-8 APR 2006</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Miami FL, USA
  L.marker([ 24.559703, -81.783642 ], {
    icon: redIcon,
    title: "Key West FL, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Key West FL, USA</city><production>Traditional Repertoire (Re-staged)</production><location>Tennessee Williams Fine Arts Center<date>25 FEB 2000</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Key West FL, USA
  L.marker([ 32.777977, -96.796215 ], {
    icon: redIcon,
    title: "Dallas TX, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Dallas TX, USA</city><production>Traditional Repertoire (Re-staged)</production><location>Texas International Theatrical Arts Society, McFarlin Auditorium<date>18-19 FEB 2000</date></location><production>Āhuti</production><location>Moody Performance Hall<date>28-29 OCT 2022</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Dallas TX, USA
  L.marker([ 36.596808, -121.897127 ], {
    icon: redIcon,
    title: "Monterey CA, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Monterey CA, USA</city><production>Traditional Repertoire (Re-staged)</production><location>Golden State Theater<date>MAR 2000</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Monterey CA, USA
  L.marker([ 36.552508, -121.924435 ], {
    icon: redIcon,
    title: "Carmel CA, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Carmel CA, USA</city><production>Traditional Repertoire (Re-staged)</production><location><date>MAR 2000</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Carmel CA, USA
  L.marker([ 40.442169, -79.994945 ], {
    icon: redIcon,
    title: "Pittsburgh PA, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Pittsburgh PA, USA</city><production>Śrī: In Search of the Goddess</production><location>Pittsburgh Dance Council, Byham Theater<date>23 MAR 2002</date></location><production>Saṃyoga</production><location>Pittsburgh Dance Council, Byham Theater<date>3 OCT 2015</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Pittsburgh PA, USA
  L.marker([ 32.221878, -110.971225 ], {
    icon: redIcon,
    title: "Tucson AZ, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Tucson AZ, USA</city><production>Śrī: In Search of the Goddess</production><location>Centennial Hall, University of Arizona<date>29-30 MAR 2002</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Tucson AZ, USA
  L.marker([ 40.801899, -77.856697 ], {
    icon: redIcon,
    title: "University Park PA, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>University Park PA, USA</city><production>Śrī: In Search of the Goddess</production><location>Eisenhower Auditorium, PENN State University<date>3 APR 2002</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // University Park PA, USA
  L.marker([ 43.700835, -72.289408 ], {
    icon: redIcon,
    title: "Hanover NH, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Hanover NH, USA</city><production>Śrī: In Search of the Goddess</production><location>Hopkins Center, Dartmouth College<date>16 APR 2002</date></location><production>Pratimā: Reflection</production><location>Hopkins Center, Dartmouth College<date>21 APR 2009</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Hanover NH, USA
  L.marker([ 38.847183, -77.306292 ], {
    icon: redIcon,
    title: "Fairfax VA, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Fairfax VA, USA</city><production>Śrī: In Search of the Goddess</production><location>George Mason University Center for the Arts<date>26 APR 2002</date></location><production>Sacred Space</production><location>George Mason University Center for the Arts<date>5 MAY 2006</date></location><production>Āhuti</production><location>George Mason University Concert Hall<date>5 NOV 2022</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Fairfax VA, USA
  L.marker([ 39.951061, -75.16562 ], {
    icon: redIcon,
    title: "Philadelphia PA, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Philadelphia PA, USA</city><production>Śrī: In Search of the Goddess</production><location>Zellerbach Theater, Annenberg Center for Performing Arts<date>12 JUL 2003</date></location><production>Āhuti</production><location>Zellerbach Theater, Annenberg Center for Performing Arts<date>5-6 MAY 2023</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Philadelphia PA, USA
  L.marker([ 40.689353, -75.216698 ], {
    icon: redIcon,
    title: "Easton PA, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Easton PA, USA</city><production>Ansh</production><location>Williams Center for the Arts, Lafayette College<date>19 APR 2005</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Easton PA, USA
  L.marker([ 39.738453, -104.984853 ], {
    icon: redIcon,
    title: "Denver CO, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Denver CO, USA</city><production>Ansh</production><location>Concert Hall, Kenneth King Center, University of Colorado<date>26 MAR 2005</date></location><production>Śriyaḥ</production><location>Gates Concert Hall, Newman Center for the Performing Arts<date>5-6 APR 2018</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Denver CO, USA
  L.marker([ 38.835224, -104.819798 ], {
    icon: redIcon,
    title: "Colorado Springs CO, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Colorado Springs CO, USA</city><production>Ansh</production><location>Armstrong Theater, Colorado College<date>3 APR 2005</date></location><production>Sacred Space</production><location>Armstrong Theater, Colorado College<date>12 MAR 2006</date></location><production>Pratimā: Reflection</production><location>Colorado Springs Dance Theater<date>1 MAY 2009</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Colorado Springs CO, USA
  L.marker([ 41.765775, -72.673356 ], {
    icon: redIcon,
    title: "Hartford CT, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Hartford CT, USA</city><production>Ansh</production><location>Theater of The Performing Arts, The Learning Corridor<date>9 APR 2005</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Hartford CT, USA
  L.marker([ 42.358894, -71.056742 ], {
    icon: redIcon,
    title: "Boston MA, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Boston MA, USA</city><production>Ansh</production><location>Zero Arrow Theater, Harvard Square<date>29 APR-1 MAY 2005</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Boston MA, USA
  L.marker([ 20.022241, -155.673932 ], {
    icon: redIcon,
    title: "Kamuela HI, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Kamuela HI, USA</city><production>Sacred Space</production><location>Kahilu Theater<date>20-21 FEB 2006</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Kamuela HI, USA
  L.marker([ 20.888034, -156.46785 ], {
    icon: redIcon,
    title: "Kahului HI, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Kahului HI, USA</city><production>Sacred Space</production><location>Maui Arts & Cultural Center<date>22-23 FEB 2006</date></location><production>Saṃhāra</production><location>Maui Arts & Cultural Center<date>21 FEB 2013</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Kahului HI, USA
  L.marker([ 21.398204, -157.968395 ], {
    icon: redIcon,
    title: "Pearl City HI, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Pearl City HI, USA</city><production>Sacred Space</production><location>Leeward Community College<date>25 FEB 2006</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Pearl City HI, USA
  L.marker([ 37.78008, -122.420168 ], {
    icon: redIcon,
    title: "San Francisco CA, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>San Francisco CA, USA</city><production>Sacred Space</production><location>Yerba Buena Center for the Arts<date>3-4 MAR 2006</date></location><production>Śriyaḥ</production><location>Palace of Fine Arts<date>31 MAR 2011</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // San Francisco CA, USA
  L.marker([ 36.604439, -121.854625 ], {
    icon: redIcon,
    title: "Seaside CA, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Seaside CA, USA</city><production>Sacred Space</production><location>CSU Monterey Bay<date>8-9 MAR 2006</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Seaside CA, USA
  L.marker([ 44.052153, -123.091195 ], {
    icon: redIcon,
    title: "Eugene OR, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Eugene OR, USA</city><production>Traditional Repertoire (Re-staged)</production><location><date>APR 1999</date></location><location><date>MAR 2000</date></location><production>Sacred Space</production><location>Hult Center for the Performing Arts<date>22 MAR 2006</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Eugene OR, USA
  L.marker([ 27.947423, -82.458776 ], {
    icon: redIcon,
    title: "Tampa FL, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Tampa FL, USA</city><production>Sacred Space</production><location>Tampa Bay Performing Arts Center<date>15 APR 2006</date></location><production>Pratimā: Reflection</production><location>Tampa Bay Performing Arts Center<date>8 APR 2009</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Tampa FL, USA
  L.marker([ 42.281419, -83.748478 ], {
    icon: redIcon,
    title: "Ann Arbor MI, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Ann Arbor MI, USA</city><production>Sacred Space</production><location>University Musical Society<date>18-19 APR 2006</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Ann Arbor MI, USA
  L.marker([ 29.760803, -95.369506 ], {
    icon: redIcon,
    title: "Houston TX, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Houston TX, USA</city><production>Sacred Space</production><location>Zilkha Hall<date>23 APR 2006</date></location><production>Pratimā: Reflection</production><location>Miller Outdoor Theater<date>25 APR 2009</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Houston TX, USA
  L.marker([ 30.264979, -97.746598 ], {
    icon: redIcon,
    title: "Austin TX, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Austin TX, USA</city><production>Sacred Space</production><location>One World Theater<date>23 APR 2006</date></location><production>Pratimā: Reflection</production><location>Akins Theater<date>21 MAR 2009</date></location><production>Songs of Love and Longing</production><location>Fine Arts Center<date>24 JAN 2015</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Austin TX, USA
  L.marker([ 32.77647, -79.931027 ], {
    icon: redIcon,
    title: "Charleston SC, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Charleston SC, USA</city><production>Sacred Space</production><location>Spoleto Festival<date>26-31 MAY 2006</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Charleston SC, USA
  L.marker([ 42.333272, -73.086534 ], {
    icon: redIcon,
    title: "Becket MA, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Becket MA, USA</city><production>Sacred Space</production><location>Jacob’s Pillow Dance Festival<date>19-23 JUL 2006</date></location><production>Upadāna.Digital</production><location>Jacob’s Pillow Dance Festival Online<date>12 JUN 2021</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Becket MA, USA
  L.marker([ 39.190665, -106.819201 ], {
    icon: redIcon,
    title: "Aspen CO, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Aspen CO, USA</city><production>Sacred Space</production><location>Aspen District Theatre<date>1 AUG 2006</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Aspen CO, USA
  L.marker([ 35.692133, -105.939593 ], {
    icon: redIcon,
    title: "Santa Fe NM, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Santa Fe NM, USA</city><production>Sacred Space</production><location>Lensic Performing Arts Center<date>2 AUG 2006</date></location><production>Pratimā: Reflection</production><location>Lensic Performing Arts Center<date>29 MAR 2008</date></location><production>Śriyaḥ</production><location>Lensic Performing Arts Center<date>8 APR 2011</date></location><production>Saṃhāra</production><location>Lensic Performing Arts Center<date>27 SEP 2018</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Santa Fe NM, USA
  L.marker([ 35.910262, -79.055474 ], {
    icon: redIcon,
    title: "Chapel Hill NC, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Chapel Hill NC, USA</city><production>Pratimā: Reflection</production><location>Memorial Hall, University of North Carolina at Chapel Hill<date>2 MAR 2008</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Chapel Hill NC, USA
  L.marker([ 37.540759, -77.433932 ], {
    icon: redIcon,
    title: "Richmond VA, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Richmond VA, USA</city><production>Pratimā: Reflection</production><location>Modlin Center for the Performing Arts, University of Richmond<date>4-5 MAR 2008</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Richmond VA, USA
  L.marker([ 26.011757, -80.139055 ], {
    icon: redIcon,
    title: "Hollywood FL, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Hollywood FL, USA</city><production>Pratimā: Reflection</production><location>Arts & Culture Center<date>7-9 MAR 2008</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Hollywood FL, USA
  L.marker([ 30.325968, -81.65676 ], {
    icon: redIcon,
    title: "Jacksonville FL, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Jacksonville FL, USA</city><production>Pratimā: Reflection</production><location>The Florida Theatre<date>14 MAR 2008</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Jacksonville FL, USA
  L.marker([ 32.08059, -81.090103 ], {
    icon: redIcon,
    title: "Savannah GA, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Savannah GA, USA</city><production>Pratimā: Reflection</production><location>Savannah Music Festival, Lucas Theatre<date>21 MAR 2008</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Savannah GA, USA
  L.marker([ 34.420867, -119.698342 ], {
    icon: redIcon,
    title: "Santa Barbara CA, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Santa Barbara CA, USA</city><production>Pratimā: Reflection</production><location>Campbell Hall, University of California Santa Barbara<date>3 APR 2008</date></location><production>Śriyaḥ</production><location>Campbell Hall, University of California Santa Barbara<date>29 JAN 2015</date></location><production>Āhuti</production><location>Campbell Hall, UC Santa Barbara<date>19 OCT 2022</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Santa Barbara CA, USA
  L.marker([ 38.984757, -77.094135 ], {
    icon: redIcon,
    title: "Bethesda MD, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Bethesda MD, USA</city><production>Pratimā: Reflection</production><location>The Music Center at Strathmore<date>19 MAR 2009</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Bethesda MD, USA
  L.marker([ 40.454773, -86.915695 ], {
    icon: redIcon,
    title: "West Lafayette IN, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>West Lafayette IN, USA</city><production>Pratimā: Reflection</production><location>Purdue Convocations<date>27 MAR 2009</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // West Lafayette IN, USA
  L.marker([ 42.521406, -70.89864 ], {
    icon: redIcon,
    title: "Salem MA, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Salem MA, USA</city><production>Pratimā: Reflection</production><location>The Peabody Museum<date>4 APR 2009</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Salem MA, USA
  L.marker([ 53.546135, -113.491213 ], {
    icon: redIcon,
    title: "Edmonton AL, Canada",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Edmonton AL, Canada</city><production>Pratimā: Reflection</production><location>Myer Horowitz Theatre<date>11 APR 2009</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Edmonton AL Canada
  L.marker([ 42.026802, -93.620181 ], {
    icon: redIcon,
    title: "Ames IA, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Ames IA, USA</city><production>Pratimā: Reflection</production><location>Ames City Auditorium<date>18 APR 2009</date></location><production>Saṃhāra</production><location>Ames City Auditorium<date>7 APR 2012</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Ames IA, USA
  L.marker([ 45.516018, -122.681425 ], {
    icon: redIcon,
    title: "Portland OR, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Portland OR, USA</city><production>Pratimā: Reflection</production><location>Kalakendra<date>3 MAY 2009</date></location><production>Ansh</production><location>Kalakendra<date>3 APR 2010</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Portland OR, USA
  L.marker([ 45.586019, -95.914027 ], {
    icon: redIcon,
    title: "Morris MN, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Morris MN, USA</city><production>Pratimā: Reflection</production><location>Edson Auditorium, University of Minnesota<date>27 FEB 2010</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Morris MN, USA
  L.marker([ 42.781472, -84.482761 ], {
    icon: redIcon,
    title: "East Lansing MI, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>East Lansing MI, USA</city><production>Pratimā: Reflection</production><location>Pasant Theater, Michigan State University<date>17-18 MAR 2010</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // East Lansing MI, USA
  L.marker([ 44.759092, -85.605469 ], {
    icon: redIcon,
    title: "Traverse City MI, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Traverse City MI, USA</city><production>Pratimā: Reflection</production><location>Milliken Auditorium<date>19-20 MAR 2010</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Traverse City MI, USA
  L.marker([ 36.166687, -86.779932 ], {
    icon: redIcon,
    title: "Nashville TN, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Nashville TN, USA</city><production>Pratimā: Reflection</production><location>Ingram Hall, Vanderbilt University<date>25 MAR 2010</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Nashville TN, USA
  L.marker([ 40.249271, -75.242783 ], {
    icon: redIcon,
    title: "Montgomery County  PA, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Montgomery County PA, USA</city><production>Pratimā: Reflection</production><location>Science Center Auditorium<date>27 MAR 2010</date></location><production>Saṃhāra</production><location>Science Center Auditorium<date>13 APR 2013</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Montgomery County PA, USA
  L.marker([ 47.603229, -122.33028 ], {
    icon: redIcon,
    title: "Seattle WA, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Seattle WA, USA</city><production>Pratimā: Reflection</production><location>Moore Theater<date>16-17 APR 2010</date></location><production>Saṃhāra</production><location>Meany Center for the Performing Arts<date>4-6 OCT 2018</date></location><production>Āhuti</production><location>Meydenbauer Center<date>11 OCT 2022</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Seattle WA, USA
  L.marker([ 38.365568, -75.599181 ], {
    icon: redIcon,
    title: "Salisbury MD, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Salisbury MD, USA</city><production>Śriyaḥ</production><location>Holloway Hall Auditorium, University of Salisbury<date>1-2 MAR 2011</date></location><location>Holloway Hall Auditorium, University of Salisbury<date>26-27 OCT 2016</date></location><production>Saṃhāra</production><location>Holloway Hall Auditorium, University of Salisbury<date>3 APR 2013</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Salisbury MD, USA
  L.marker([ 43.68402, -79.759046 ], {
    icon: redIcon,
    title: "Brampton ON, Canada",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Brampton ON, Canada</city><production>Śriyaḥ</production><location>Rose Theatre Brampton<date>18 MAR 2011</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Brampton ON, Canada
  L.marker([ 43.873987, -79.259867 ], {
    icon: redIcon,
    title: "Markham ON, Canada",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Markham ON, Canada</city><production>Śriyaḥ</production><location>Markham Theatre, Markham<date>23-24 MAR 2011</date></location><location>Flato Markham Theatre, Markham<date>18 APR 2018</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Markham ON, Canada
  L.marker([ 33.748547, -84.391502 ], {
    icon: redIcon,
    title: "Atlanta GA, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Atlanta GA, USA</city><production>Śriyaḥ</production><location>Ferst Center for the Arts, Georgia Tech<date>27 MAR 2011</date></location><production>Āhuti</production><location>Ferst Center for the Arts, Georgia Tech<date>29 MAR 2024</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Atlanta GA, USA
  L.marker([ 34.14955, -118.141452 ], {
    icon: redIcon,
    title: "Pasadena CA, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Pasadena CA, USA</city><production>Śriyaḥ</production><location>Beckman Auditorium, Caltech<date>2 APR 2011</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Pasadena CA, USA
  L.marker([ 39.190363, -96.549656 ], {
    icon: redIcon,
    title: "Manhattan KS, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Manhattan KS, USA</city><production>Śriyaḥ</production><location>McCain Auditorium, Kansas State University<date>14 APR 2011</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Manhattan KS, USA
  L.marker([ 33.448204, -112.072585 ], {
    icon: redIcon,
    title: "Phoenix AZ, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Phoenix AZ, USA</city><production>Śriyaḥ</production><location>Scottsdale Center for the Performing Arts<date>16 APR 2011</date></location><production>Saṃhāra</production><location>Scottsdale Center for the Performing Arts<date>8 MAR 2013</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Phoenix AZ, USA
  L.marker([ 38.811309, -89.955724 ], {
    icon: redIcon,
    title: "Edwardsville IL, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Edwardsville IL, USA</city><production>Saṃhāra</production><location>The Wildey Theatre<date>16 MAR 2012</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Edwardsville IL, USA
  L.marker([ 30.22126, -92.018773 ], {
    icon: redIcon,
    title: "Lafayette LA, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Lafayette LA, USA</city><production>Saṃhāra</production><location>Heymann Center<date>3 APR 2012</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Lafayette LA, USA
  L.marker([ 19.043671, -98.198727 ], {
    icon: redIcon,
    title: "Puebla Mexico",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Puebla Mexico</city><production>Saṃhāra</production><location>Festival Internacional de Puebla<date>13-14 APR 2012</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Puebla Mexico
  L.marker([ 20.750203, -155.986729 ], {
    icon: redIcon,
    title: "Hana HI, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Hana HI, USA</city><production>Saṃhāra</production><location>Hana Community Center<date>19 FEB 2013</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Hana HI, USA
  L.marker([ 40.966311, -76.884932 ], {
    icon: redIcon,
    title: "Lewisburg PA, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Lewisburg PA, USA</city><production>Saṃhāra</production><location>Weis Center for the Performing Arts, Bucknell University<date>1 MAR 2013</date></location><location>Weis Center for the Performing Arts, Bucknell University<date>18 OCT 2018</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Lewisburg PA, USA
  L.marker([ 40.233677, -111.663926 ], {
    icon: redIcon,
    title: "Provo UT, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Provo UT, USA</city><production>Saṃhāra</production><location>Harris Fine Arts Center, Brigham Young University<date>14 MAR 2013</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Provo UT, USA
  L.marker([ 35.084248, -106.649241 ], {
    icon: redIcon,
    title: "Albuquerque NM, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Albuquerque NM, USA</city><production>Saṃhāra</production><location>Popejoy Hall, University of New Mexico<date>22 MAR 2013</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Albuquerque NM, USA
  L.marker([ 45.509062, -73.553363 ], {
    icon: redIcon,
    title: "Montreal Quebec, Canada",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Montreal Quebec, Canada</city><production>Saṃyoga</production><location>Salle Gesu Theater<date>26 APR 2014</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Montreal Quebec, Canada
  L.marker([ 43.651893, -79.381713 ], {
    icon: redIcon,
    title: "Toronto ON, Canada",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Toronto ON, Canada</city><production>Vibhakta</production><location>Fall for Dance North, Sony Centre<date>29 SEP 2015</date></location><production>Lalita Lavanga.Digital</production><location>Fall for Dance North Online<date>13 OCT 2021</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Toronto ON, Canada
  L.marker([ 41.308252, -72.924161 ], {
    icon: redIcon,
    title: "New Haven CT, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>New Haven CT, USA</city><production>Protima Bedi & Party</production><location>Yale University<date>OCT 1993</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // New Haven CT, USA
  L.marker([ 41.544654, -72.651713 ], {
    icon: redIcon,
    title: "Middletown CT, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Middletown CT, USA</city><production>Śriyaḥ</production><location>Crowell Concert Hall, Wesleyan University<date>20 OCT 2016</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Middletown CT, USA
  L.marker([ 38.291962, -122.458003 ], {
    icon: redIcon,
    title: "Sonoma CA, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Sonoma CA, USA</city><production>Śriyaḥ</production><location>Weill Hall at Green Music Center, Sonoma State University<date>27 APR 2018</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Sonoma CA, USA
  L.marker([ 40.731507, -74.174388 ], {
    icon: redIcon,
    title: "Newark NJ, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Newark NJ, USA</city><production>Śriyaḥ</production><location>Jim Wise Theatre, New Jersey Institute of Technology<date>24-25 APR 2018</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Newark NJ, USA
  L.marker([ 35.996948, -78.899023 ], {
    icon: redIcon,
    title: "Durham NC, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Durham NC, USA</city><production>Śrī: In Search of the Goddess</production><location>American Dance Festival, Reynolds Theater, Duke University<date>2 JUL 2003</date></location><production>Songs of Love and Longing</production><location>Reynolds Theater, Duke University<date>27 JAN 2015</date></location><production>Saṃhāra</production><location>RJ Reynolds Industries Theater, Duke University<date>22-23 SEP 2018</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Durham NC, USA
  L.marker([ 42.881978, -71.324171 ], {
    icon: redIcon,
    title: "Derry NH, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Derry NH, USA</city><production>Saṃhāra</production><location>Stockbridge Theater, Pinkerton Academy<date>10 OCT 2018</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Derry NH, USA
  L.marker([ 42.375805, -72.519871 ], {
    icon: redIcon,
    title: "Amherst MA, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Amherst MA, USA</city><production>Saṃhāra</production><location>UMASS Fine Arts Center Concert Hall<date>13 OCT 2018</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Amherst MA, USA
  L.marker([ 35.838393, -90.710505 ], {
    icon: redIcon,
    title: "Jonesboro AR, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Jonesboro AR, USA</city><production>Āhuti</production><location>Fowler Center, Arkansas State University<date>1 OCT 2019</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Jonesboro AR, USA
  L.marker([ 33.957412, -83.376798 ], {
    icon: redIcon,
    title: "Athens GA, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Athens GA, USA</city><production>Āhuti</production><location>Hugh Hodgson Concert Hall, University of Georgia<date>6 OCT 2019</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Athens GA, USA
  L.marker([ 27.336483, -82.538602 ], {
    icon: redIcon,
    title: "Sarasota FL, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Sarasota FL, USA</city><production>Āhuti</production><location>Historic Asolo Theater, Ringling Museum of Art<date>11-12 OCT 2019</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Sarasota FL, USA
  L.marker([ 34.052238, -118.243344 ], {
    icon: redIcon,
    title: "Los Angeles CA, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Los Angeles CA, USA</city><production>Āhuti</production><location>The Luckman Theatre, Cal State University<date>19 OCT 2019</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Los Angeles CA, USA
  L.marker([ 45.264633, -111.253265 ], {
    icon: redIcon,
    title: "Big Sky MT, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Big Sky MT, USA</city><production>Śriyaḥ</production><location>Warren Miller Performing Arts Center<date>14 FEB 2015</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Big Sky MT, USA
  L.marker([ 42.422372, -76.461572 ], {
    icon: redIcon,
    title: "Ithaca NY, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Ithaca NY, USA</city><production>Songs of Love and Longing</production><location>Barnes Hall, Cornell University<date>4 FEB 2015</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Ithaca NY, USA
  L.marker([ 37.334807, -121.888128 ], {
    icon: redIcon,
    title: "San Jose CA, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>San Jose CA, USA</city><production>Saṃyoga</production><location>California Theater<date>11 MAY 2014</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // San Jose CA, USA
  L.marker([ 39.9574011, -105.1303553 ], {
    icon: redIcon,
    title: "North Glenn CO, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>North Glenn CO, USA</city><production>Āhuti</production><location>Parsons Theater<date>8 OCT 2022</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // North Glenn CO, USA
  L.marker([ 33.8281579, -118.4024813 ], {
    icon: redIcon,
    title: "Redondo Beach CA, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Redondo Beach CA, USA</city><production>Āhuti</production><location>Redondo Beach Performing Arts Center<date>15 OCT 2022</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Redondo Beach CA, USA
  L.marker([ 37.2304444, -80.4706545 ], {
    icon: redIcon,
    title: "Blacksburg VA, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Blacksburg VA, USA</city><production>Āhuti</production><location>Moss Arts Center Virginia Tech<date>12 NOV 2022</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Blacksburg VA, USA
  L.marker([ 43.3923763, -88.4038979 ], {
    icon: redIcon,
    title: "Milwaukee WI, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Milwaukee WI, USA</city><production>Āhuti</production><location>Marcus Performing Arts Center<date>28 APR 2023</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Milwaukee WI, USA
  L.marker([ 32.8724942, -117.3309734 ], {
    icon: redIcon,
    title: "La Jolla CA, USA",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>La Jolla CA, USA</city><production>Āhuti</production><location>The Baker Baum Concert Hall<date>20-21 MAR 2024</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // La Jolla CA, USA
  L.marker([ 40.6220225, -79.1664877 ], {
    icon: redIcon,
    title: "Indiana PA, USA ",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Indiana PA, USA </city><production>Āhuti</production><location>Fisher Auditorium<date>26 MAR 2024</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Indiana PA, USA 

  // +++++++++++++++++  OTHERS  +++++++++++++++++
  L.marker([ -26.17, 28.03 ], {
    icon: redIcon,
    title: "Johannesburg, South Africa",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Johannesburg, South Africa</city><production>Ansh</production><location>The Dance Factory<date>19-20 SEP 2009</date></location><production>Śriyaḥ</production><location>The Dance Factory<date>18-19 SEP 2012</date></location><location>WITS Theatre<date>10-11 SEP 2015</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Johannesburg
  L.marker([ -29.865, 30.98 ], {
    icon: redIcon,
    title: "Durban, South Africa",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Durban, South Africa</city><production>Ansh</production><location>The Playhouse Company<date>17 SEP 2009</date></location><production>Śriyaḥ</production><location>The Playhouse Company<date>21-22 SEP 2012</date></location><location>The Playhouse Company<date>13-14 SEP 2015</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Durban
  L.marker([ 30.05, 31.25 ], {
    icon: redIcon,
    title: "Cairo, Egypt",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Cairo, Egypt</city><production>Śriyaḥ</production><location>Cairo Opera House<date>9 MAY 2013</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Cairo
  L.marker([ 1.293, 103.8558 ], {
    icon: redIcon,
    title: "Singapore",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Singapore</city><production>Surupa & Bijayini</production><location>Esplanade Theatre<date>13-14 NOV 2004</date></location><production>Saṃhāra</production><location>Esplanade Theatre<date>28-29 NOV 2012</date></location><production>Songs of Love and Longing</production><location>Esplanade Theatre<date>10 APR 2016</date></location><production>Vinati: Songs from the Gita Govinda</production><location>Esplanade Theatre<date>11 SEP 2022</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Singapore
  L.marker([ -31.955, 115.84 ], {
    icon: redIcon,
    title: "Perth, Australia",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Perth, Australia</city><production>Śriyaḥ</production><location>Studio Underground, State Theatre of Western Australia<date>27-28 SEP 2016</date></location><production>Bijayini Solo</production><location>Heath Ledger Hall, State Theatre of Western Australia<date>10 OCT 2017</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Perth
  L.marker([ -35.283, 149.129 ], {
    icon: redIcon,
    title: "Canberra, Australia",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Canberra, Australia</city><production>Śriyaḥ</production><location>The Playhouse, Canberra Theatre Centre<date>25 SEP 2016</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Canberra
  L.marker([ -33.92, 151.1852 ], {
    icon: redIcon,
    title: "Sydney, Australia",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Sydney, Australia</city><production>Śriyaḥ</production><location>Sydney Opera House<date>13-14 SEP 2016</date></location><production>Festival Gala</production><location>Sydney Opera House<date>18 SEP 2016</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Sydney
  L.marker([ 6.932, 79.8578 ], {
    icon: redIcon,
    title: "Colombo, Sri Lanka",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Colombo, Sri Lanka</city><production>Pratimā: Reflection</production><location>Bishops Auditorium<date>17 JAN 2009</date></location><production>Ansh</production><location>Bishops Auditorium<date>18 JAN 2009</date></location><production>Saṃhāra</production><location>Lionel Wendt Theatre<date>11-13 MAY 2012</date></location><location>Lionel Wendt Theatre<date>5-6 JUN 2017</date></location><production>Śriyaḥ</production><location>Bishops Auditorium<date>14 NOV 2014</date></location><production>Songs of Love and Longing</production><location>Bishops Auditorium<date>15 NOV 2014</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Colombo, Sri Lanka
  L.marker([ 32.08, 34.77 ], {
    icon: redIcon,
    title: "Tel Aviv, Israel",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Tel Aviv, Israel</city><production>Śriyaḥ</production><location>Suzanne Dellal Center<date>5-6 MAY 2011</date></location><location>Suzanne Dellal Center<date>13-14 MAY 2013</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Tel Aviv
  L.marker([ 25.268352, 55.296196 ], {
    icon: redIcon,
    title: "Dubai, UAE",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Dubai, UAE</city><production>Traditional Repertoire (Re-staged)</production><location><date>20 SEP 1995</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Dubai, UAE
  L.marker([ 24.5239, 54.4346 ], {
    icon: redIcon,
    title: "Abu Dhabi, UAE",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Abu Dhabi, UAE</city><production>Āhuti.Digital</production><location>NYU Abu Dhabi Online<date>17 FEB 2021</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Abu Dhabi, UAE
  L.marker([ 35.680071, 139.768522 ], {
    icon: redIcon,
    title: "Tokyo, Japan",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Tokyo, Japan</city><production>Surupa & Bijayini Odissi Repertoire</production><location><date>24 MAY 2002</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Tokyo, Japan
  L.marker([ 26.223504, 50.582244 ], {
    icon: redIcon,
    title: "Manama, Bahrain",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Manama, Bahrain</city><production>Ansh</production><location>Soorya Festival<date>23 SEP 2005</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Manama, Bahrain
  L.marker([ 3.157098, 101.700953 ], {
    icon: redIcon,
    title: "Kuala Lumpur, Malaysia",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Kuala Lumpur, Malaysia</city><production>Surupa & Bijayini</production><location>Odissi International Festival, Malaysian Tourist Centre<date>7-8 JUN 2008</date></location><production>Pratimā: Reflection</production><location>Odissi International Festival, KLPAC<date>13-14 JUN 2008</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Kuala Lumpur, Malaysia
  L.marker([ 31.199004, 29.894379 ], {
    icon: redIcon,
    title: "Alexandrina, Egypt",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Alexandrina, Egypt</city><production>Śriyaḥ</production><location>Great Hall, Bibliotheca<date>6 MAY 2013</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Alexandrina, Egypt
  L.marker([ 31.895253, 34.810562 ], {
    icon: redIcon,
    title: "Rehovot, Israel",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Rehovot, Israel</city><production>Śriyaḥ</production><location>Weizmann Institute<date>20 MAY 2013</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Rehovot, Israel
  L.marker([ 22.264412, 114.167061 ], {
    icon: redIcon,
    title: "Hong Kong, HK",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Hong Kong, HK</city><production>Bijayini Solo</production><location>India by the Bay, Asia Society<date>28 FEB 2016</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Hong Kong, HK
  L.marker([ -27.468968, 153.023499 ], {
    icon: redIcon,
    title: "Brisbane, Australia",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Brisbane, Australia</city><production>Śriyaḥ</production><location>Cremorne Theatre, QPAC<date>1 OCT 2016</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Brisbane, Australia
  L.marker([ -37.814255, 144.963146 ], {
    icon: redIcon,
    title: "Melbourne, Australia",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Melbourne, Australia</city><production>Bijayini Solo</production><location>Drama Theatre, Monash University<date>8 OCT 2017</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Melbourne, Australia
  L.marker([ 38.415342, 27.144474 ], {
    icon: redIcon,
    title: "Izmir, Turkey",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Izmir, Turkey</city><production>Śriyaḥ</production><location>India By The Bosphorus, Culture Park<date>27 APR 2019</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Izmir, Turkey
  L.marker([ 39.927232, 32.851977 ], {
    icon: redIcon,
    title: "Ankara, Turkey",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Ankara, Turkey</city><production>Śriyaḥ</production><location>India By The Bosphorus, Leyla Gencer Hall<date>26 APR 2019</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Ankara, Turkey
  L.marker([ 41.017058, 28.985568 ], {
    icon: redIcon,
    title: "Istanbul, Turkey",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Istanbul, Turkey</city><production>Śriyaḥ</production><location>India By The Bosphorus, Suleyman Seba Hall<date>24 APR 2019</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Istanbul, Turkey
  L.marker([ 22.194401, 113.536499 ], {
    icon: redIcon,
    title: "Macau, Macau",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Macau, Macau</city><production>Sridevi</production><location><date>17 SEP 2010</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Macau, Macau
  L.marker([ 9.6699569, 80.0078271 ], {
    icon: redIcon,
    title: "Jaffna, Sri Lanka",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Jaffna, Sri Lanka</city><production>Āhuti</production><location>Jaffna Cultural Center<date>21 APR 2024</date></location><location>Bishops College Auditorium<date>25-26 APR 2024</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Jaffna, Sri Lanka


  // +++++++++++++++++  EUROPE  +++++++++++++++++
  L.marker([ 55.9483, -3.2191 ], {
    icon: redIcon,
    title: "Edinburgh, UK",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Edinburgh, UK</city><production>Bijayini Solo</production><location>Edinburgh Festival Fringe, Dance Base<date>7-10, 12-16 AUG 2003</date></location><production>Surupa & Bijayini</production><location>Edinburgh Festival Fringe, Dance Base<date>13-22 AUG 2004</date></location><production>Śriyaḥ</production><location>Edinburgh International Festival, King’s Theatre<date>26-29 AUG 2011</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Edinburgh, UK
  L.marker([ 48.8667, 2.3333 ], {
    icon: redIcon,
    title: "Paris, France",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Paris, France</city><production>Saṃyoga</production><location>Festival d’Île de France<date>13 SEP 2014</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Paris, France
  L.marker([ 51.439528, 5.47806 ], {
    icon: redIcon,
    title: "Eindhoven, The Netherlands",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Eindhoven, The Netherlands</city><production>Surupa Solo</production><location><date>MAR 1995</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Eindhoven, The Netherlands
  L.marker([ 56.446913, 9.405935 ], {
    icon: redIcon,
    title: "Viborg, Denmark",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Viborg, Denmark</city><production>Traditional Repertoire (Re-staged)</production><location><date>NOV 1997</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Viborg, Denmark
  L.marker([ 56.169453, 9.549514 ], {
    icon: redIcon,
    title: "Silkeborg, Denmark",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Silkeborg, Denmark</city><production>Traditional Repertoire (Re-staged)</production><location><date>NOV 1997</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Silkeborg, Denmark
  L.marker([ 38.713057, -9.138006 ], {
    icon: redIcon,
    title: "Lisbon, Portugal",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Lisbon, Portugal</city><production>Traditional Repertoire (Re-staged)</production><location>Teatro Nacional D. Maria II<date>5-6 JUN 1998</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Lisbon, Portugal
  L.marker([ 52.45363, 6.41362 ], {
    icon: redIcon,
    title: "Lommel, The Netherlands",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Lommel, The Netherlands</city><production>Bijayini Solo</production><location>De Adelberg<date>23 FEB 2003</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Lommel, The Netherlands
  L.marker([ 52.079984, 4.311346 ], {
    icon: redIcon,
    title: "Den Haag, The Netherlands",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Den Haag, The Netherlands</city><production>Bijayini Solo</production><location>Theater Zwembad De Regentes<date>25 FEB 2003</date></location><location>Korzo Main Stage<date>20 SEP 2006</date></location><production>Pratimā: Reflection</production><location>Korzo Main Stage<date>23 NOV 2008</date></location><production>Vinati: Songs from the Gita Govinda</production><location>Korzo Main Stage<date>20 MAY 2022</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Den Haag, The Netherlands
  L.marker([ 53.219065, 6.568008 ], {
    icon: redIcon,
    title: "Groningen, The Netherlands",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Groningen, The Netherlands</city><production>Bijayini Solo</production><location>De Oosterpoort<date>26 FEB 2003</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Groningen, The Netherlands
  L.marker([ 51.922896, 4.463173 ], {
    icon: redIcon,
    title: "Rotterdam, The Netherlands",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Rotterdam, The Netherlands</city><production>Bijayini Solo</production><location>De Doelen<date>27 FEB 2003</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Rotterdam, The Netherlands
  L.marker([ 51.22111, 4.399708 ], {
    icon: redIcon,
    title: "Antwerpen, Belgium",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Antwerpen, Belgium</city><production>Bijayini Solo</production><location>Wereldculturecentrum Zuiderpershuis<date>28 FEB 2003</date></location><location>Wereldculturecentrum Zuiderpershuis<date>21 SEP 2006</date></location><production>Surupa & Bijayini</production><location>Wereldculturecentrum Zuiderpershuis<date>26 NOV 2010</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Antwerpen, Belgium
  L.marker([ 52.095942, 5.110414 ], {
    icon: redIcon,
    title: "Utrecht, The Netherlands",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Utrecht, The Netherlands</city><production>Bijayini Solo</production><location>Rasa Wereldculturecentrum<date>1 MAR 2003</date></location><location>Rasa Wereldculturecentrum<date>22 SEP 2006</date></location><production>Surupa & Bijayini</production><location>Rasa Wereldculturecentrum<date>28 NOV 2010</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Utrecht, The Netherlands
  L.marker([ 52.371009, 4.900112 ], {
    icon: redIcon,
    title: "Amsterdam, The Netherlands",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Amsterdam, The Netherlands</city><production>Bijayini Solo</production><location>KIT Tropentheater<date>2 MAR 2003</date></location><location>KIT Tropentheater<date>23 SEP 2006</date></location><production>Pratimā: Reflection</production><location>The Great Theatre<date>21 NOV 2008</date></location><production>Surupa & Bijayini</production><location>Tropentheater<date>27 NOV 2010</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Amsterdam, The Netherlands
  L.marker([ 51.547516, 3.666088 ], {
    icon: redIcon,
    title: "Veere, The Netherlands",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Veere, The Netherlands</city><production>Bijayini Solo</production><location>Grote Kerk<date>24 SEP 2006</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Veere, The Netherlands
  L.marker([ 51.507276, -0.12766 ], {
    icon: redIcon,
    title: "London, UK",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>London, UK</city><production>Bijayini Solo</production><location>Nehru Center<date>20 AUG 2003</date></location><production>Saṃyoga</production><location>Queen Elizabeth Hall, Southbank Centre<date>19 MAY 2015</date></location><production>Saṃhāra</production><location>Royal Festival Hall, Southbank Centre<date>26 MAY 2017</date></location><production>Śriyaḥ</production><location>The Science Museum<date>24 & 26 NOV 2017</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // London, UK
  L.marker([ 45.466797, 9.190498 ], {
    icon: redIcon,
    title: "Milan, Italy",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Milan, Italy</city><production>Pratimā: Reflection</production><location>Teatro Elfo Puccini<date>17-18 NOV 2008</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Milan, Italy
  L.marker([ 41.652133, -4.728562 ], {
    icon: redIcon,
    title: "Valladolid, Spain",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Valladolid, Spain</city><production>Pratimā: Reflection</production><location>Miguel Delibes Cultural Center<date>25-27 NOV 2008</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Valladolid, Spain
  L.marker([ 57.706407, 11.968629 ], {
    icon: redIcon,
    title: "Gothenburg, Sweden",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Gothenburg, Sweden</city><production>Śriyaḥ</production><location>Pusterviks Teartern<date>11 NOV 2010</date><emph>Premiere</emph></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Gothenburg, Sweden
  L.marker([ 59.330761, 18.06131 ], {
    icon: redIcon,
    title: "Stockholm, Sweden",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Stockholm, Sweden</city><production>Śriyaḥ</production><location>Sodra Teatern<date>13 NOV 2010</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Stockholm, Sweden
  L.marker([ 55.861147, -4.249989 ], {
    icon: redIcon,
    title: "Glasgow, UK",
    riseOnHover: true,
  })
    .addTo(deskmap)
    .bindPopup(
      "<city>Glasgow, UK</city><production>Saṃyoga</production><location>Alchemy Festival, City Halls<date>23 MAY 2015</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Glasgow, UK

  // ++++++++++++++ MOBILE ++++++++++++++++
  // ++++++++++++++ MOBILE ++++++++++++++++
  // ++++++++++++++ MOBILE ++++++++++++++++
  // Add markers to mobile map
  // +++++++++++++++++  INDIA  +++++++++++++++++
  L.marker([ 12.97, 77.56 ], {
    icon: redIcon,
    title: "Bengaluru, India",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Bengaluru, India</city><production>Traditional Repertoire (Re-staged)</production><location>JN Tata Auditorium<date>17 FEB 1998</date></location><location>Ravindra Kalakshetra<date>5 NOV 1998</date></location><location>JN Tata Auditorium<date>15-16 NOV 1998</date></location><location>JN Tata Auditorium<date>28 NOV 1998</date></location><location>Chowdiah Memorial Hall<date>25 SEP 1999</date></location><location>Chowdiah Memorial Hall<date>2 OCT 1999</date></location><location>JN Tata Auditorium<date>1 DEC 2000</date></location><location>Guru Nanak Bhavan<date>25 JAN 2001</date></location><production>Surupa Solo</production><location>Bharatiya Vidya Bhavan<date>11 APR 1998</date></location><production>Śrī (Odissi)</production><location>JN Tata Auditorium<date>21 AUG 2001</date></location><location>JN Tata Auditorium<date>4 DEC 2001</date></location><location>Chowdiah Memorial Hall<date>15 JAN 2002</date></location><location>JN Tata Auditorium<date>14 FEB 2002</date></location><location>JN Tata Auditorium<date>15 FEB 2002</date></location><location>JN Tata Auditorium<date>9 JAN 2003</date></location><location>JN Tata Auditorium<date>12 JAN 2003</date></location><location>NIMHANS Auditorium<date>30 APR 2003</date></location><location>JN Tata Auditorium<date>26 NOV 2003</date></location><location>JN Tata Auditorium<date>17 DEC 2003</date></location><location>JN Tata Auditorium<date>7 JAN 2004</date></location><location>JN Tata Auditorium<date>21 FEB 2004</date></location><location>Chowdiah Memorial Hall<date>3 APR 2004</date></location><location>Bangalore Habba, Ravindra Kalakshetra<date>6 DEC 2004</date></location><production>Surupa & Bijayini</production><location>JN Tata Auditorium<date>9 NOV 2001</date></location><location>Bangalore Habba, Ravindra Kalakshetra<date>17 FEB 2009</date></location><location>JN Tata Auditorium<date>22 FEB 2009</date></location><production>Śrī: In Search of the Goddess</production><location>Attakkalari Biennale, Ravindra Kalakshetra<date>8 FEB 2002</date></location><location>Chowdiah Memorial Hall<date>25-26 JUL 2002</date></location><production>Pavithra Solo Debut</production><location>JN Tata Auditorium<date>27 DEC 2003</date></location><production>Pavithra Solo</production><location>Ananya Auditorium<date>SEP 2004</date></location><location>Gayana Samaj<date>5 NOV 2004</date></location><location>Ananya Nrithya Dhare, Seva Sadan<date>6-7 SEP 2008</date></location><location> ICCR Horizons Festival, Yavanika<date>28 MAY 2010</date></location><location>Naman Festival, ADA Rangamandira<date>28 JUL 2013</date></location><location>Ananya Nrithya Dhare, Seva Sadan<date>23 NOV 2013</date></location><production>Ansh</production><location>Chowdiah Memorial Hall<date>19 SEP 2005</date></location><location>JSS Auditorium<date>11 DEC 2005</date></location><location>JN Tata Auditorium<date>5 JUL 2007</date></location><location>Indiranagar Sangeet Sabha<date>25 JAN 2009</date></location><production>Bijayini Solo</production><location>Ravindra Kalakshetra<date>7 DEC 2006</date></location><production>Pratimā: Reflection</production><location>Attakkalari Biennale, Chowdiah Memorial Hall<date>9 FEB 2009</date></location><location>Nadam Festival, Chowdiah Hall<date>15 NOV 2009</date></location><location>JN Tata Auditorium<date>22 JAN 2010</date></location><location>Drishti Dance Festival, Chowdiah Hall<date>23 JAN 2010</date></location><location>ADA Rangamandira<date>18 JUL 2010</date></location><production>Śriyaḥ</production><location>JN Tata Auditorium<date>5 JAN 2011</date></location><location>Soorya Festival, Seva Sadan<date>16 SEP 2011</date></location><location>JN Tata Auditorium<date>20 AUG 2012</date></location><location>JN Tata Auditorium<date>2 DEC 2013</date></location><location>JN Tata Auditorium<date>27 NOV 2014</date></location><location>Bhoomija, MLR Convention Center<date>15 JAN 2017</date></location><location>Chowdiah Memorial Hall<date>5 MAY 2017</date></location><location>Chowdiah Memorial Hall<date>30 JUN 2017</date></location><location>JRD TATA Auditorium, NIAS<date>11 JAN 2019</date></location><location>Kalanadam at ADA Rangamandira<date>29 NOV 2019</date></location><location>JRD TATA Auditorium, NIAS<date>11 JAN 2020</date></location><location>Ritz Carlton<date>8 MAR 2020</date></location><location>Naman Festival at ADA Rangamandira<date>27 AUG 2023</date></location><production>Surupa & Pavithra</production><location>ICTS<date>11 FEB 2020</date></location><production>Saṃhāra</production><location>Chowdiah Memorial Hall<date>24 FEB 2012</date><emph>Premiere</emph></location><location>Chowdiah Memorial Hall<date>20 OCT 2012</date></location><location>Bhoomija, Chowdiah Memorial Hall<date>8 DEC 2012</date></location><location>Attakkalari Biennale, Chowdiah Memorial Hall<date>28 JAN 2013</date></location><location>Bhoomija Chowdiah Memorial Hall<date>19 MAY 2017</date></location><location>Bhoomija Chowdiah Memorial Hall<date>24 JAN 2018</date></location><location>Bhoomija Chowdiah Memorial Hall<date>16 SEP 2018</date></location><production>Saṃyoga</production><location>Chowdiah Memorial Hall<date>6 SEP 2012</date></location><location>Bhoomija, Jagriti Theatre<date>9 DEC 2012</date></location><location>Kinkini Festival, JSS Auditorium<date>30 JAN 2013</date></location><location>Indiranagar Sangeet Sabha<date>12 FEB 2013</date></location><location>Nimhans Auditorium<date>16 AUG 2013</date></location><location>Bhoomija, Chowdiah Memorial Hall<date>7 DEC 2013</date></location><location>JN Tata Auditorium<date>31 JAN 2014</date></location><location>Rangashankara<date>27 OCT 2014</date></location><production>NrityaUtsarga</production><location>Seva Sadan<date>18 AUG 2013</date></location><location>Bharatiya Vidya Bhavan<date>18 AUG 2014</date></location><location>Chowdiah Memorial Hall<date>18 AUG 2015</date></location><location>Sophia School Auditorium<date>18 AUG 2016</date></location><location>CES Auditorium<date>18 AUG 2018</date></location><location>Ambedkar Bhavan<date>18 AUG 2019</date></location><production>Songs of Love and Longing</production><location>Bhoomija, Jagriti Theatre<date>22 NOV 2013</date><emph>Premiere</emph></location><production>Yadunandana</production><location>Naman Festival, ADA Rangamandira<date>27 AUG 2017</date><emph>Premiere</emph></location><location>JNCASR Auditorium<date>20 FEB 2019</date></location><production>Āhuti</production><location>Bhoomija Chowdiah Memorial Hall<date>20 SEP 2019</date><emph>Premiere</emph></location><production>Vinati: Songs from the Gita Govinda</production><location>Bhoomija Chowdiah Memorial Hall<date>4 DEC 2021</date><emph>Premiere</emph></location><location>JNCASR Auditorium<date>7 DEC 2023</date></location><production>Āhuti Reimagined</production><location>Bhoomija Chowdiah Memorial Hall<date>25 SEP 2022 Premiere</date></location><location>Bhoomija Chowdiah Memorial Hall<date>12 APR 2024</date></location><production>Khaṅkhaṇā</production><location>Saranagati Dance Festival<date>26 JAN 2024</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Bengaluru
  L.marker([ 28.6, 77.2 ], {
    icon: redIcon,
    title: "New Delhi, India",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>New Delhi, India</city><production>Ensemble National Debut</production><location>British Council Theatre<date>24-25 SEP 1994</date></location><production>Surupa Solo Debut</production><location>Kamani Auditorium<date>22 MAR 1996</date></location><production>Traditional Repertoire (Re-staged)</production><location>Qutub Festival<date>25 OCT 1996</date></location><production>Surupa Solo</production><location>British Council Auditorium<date>14-15 DEC 1996</date></location><location>India International Center<date>13 JUN 1997</date></location><location>ICGEB Auditorium<date>11 NOV 2002</date></location><location>Meghdoot Theatre<date>17 FEB 2012</date></location><production>Bijayini Solo Debut</production><location>Kamani Auditorium<date>5 MAR 1997</date></location><production>Bijayini Solo</production><location>India International Center<date>2 MAY 1998</date></location><location>Parampara Festival, Kamani Auditorium<date>1 OCT 2004</date></location><location>Meghdoot Theatre<date>26 MAR 2007</date></location><production>Śrī: In Search of the Goddess</production><location>Kamani Auditorium<date>3-4 MAY 2001</date><emph>Premiere</emph></location><production>Śrī (Odissi)</production><location>Kamani Auditorium<date>11 MAY 2003</date></location><production>Surupa & Bijayini</production><location>Stein Auditorium, India Habitat Center<date>11 NOV 2003</date></location><location>Odissi International Festival, Kamani Auditorium<date>26 NOV 2006</date></location><location>Stein Auditorium, India Habitat Center<date>3 NOV 2008</date></location><production>Ansh</production><location>Kamani Auditorium<date>12 SEP 2005</date></location><location>India International Centre<date>24 OCT 2007</date></location><production>Sacred Space</production><location>Purana Qila Festival<date>12 OCT 2006</date></location><production>Pratimā: Reflection</production><location>Kamani Auditorium<date>15 SEP 2010</date></location><production>Saṃhāra</production><location>IGNITE Festival, Kamani Auditorium<date>4 NOV 2012</date></location><production>Saṃyoga</production><location>Divinity Series, Kamani Auditorium<date>27 SEP 2014</date></location><production>Pavithra Solo</production><location>Stein Auditorium, India Habitat Centre<date>5 OCT 2017</date></location><production>Āhuti</production><location>Stein Auditorium<date>25 JAN 2023</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Delhi
  L.marker([ 13.09, 80.28 ], {
    icon: redIcon,
    title: "Chennai, India",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Chennai, India</city><production>Traditional Repertoire (Re-staged)</production><location>Sri Krishna Gana Sabha<date>DEC 1994</date></location><production>Surupa & Bijayini for Maami</production><location>Sri Krishna Gana Sabha<date>25 DEC 1998</date></location><production>Śrī (Odissi)</production><location>Marga Festival, Bharatiya Vidya Bhavan<date>28 NOV 2002</date></location><location>Madras Music Academy<date>2 JAN 2005</date></location><production>Surupa & Bijayini</production><location>Sri Krishna Gana Sabha<date>23 DEC 2003</date></location><location>Sri Krishna Gana Sabha<date>9 DEC 2004</date></location><location>Karthik Fine Arts, Narada Gana Sabha<date>13 DEC 2004</date></location><location>Sri Krishna Gana Sabha<date>15 DEC 2005</date></location><location>Sri Krishna Gana Sabha<date>13 DEC 2006</date></location><location>Sri Krishna Gana Sabha<date>21 DEC 2008</date></location><location>Bharat Kalachar Festival<date>14 JAN 2009</date></location><location>Bharat Kalachar Festival<date>6 DEC 2009</date></location><location>Bharat Kalachar Festival<date>11 DEC 2010</date></location><location>Sri Krishna Gana Sabha<date>26 DEC 2010</date></location><location>Sri Krishna Gana Sabha<date>25 DEC 2011</date></location><location>Madras Music Academy<date>9 JAN 2012</date></location><production>Ansh</production><location>Madras Music Academy<date>2 JAN 2005</date><emph>Premiere</emph></location><location>Madras Music Academy<date>6 JAN 2007</date></location><location>Rukmini Arangham, Kalakshetra<date>23 DEC 2007</date></location><production>Sacred Space</production><location>Madras Music Academy<date>19 DEC 2005</date><emph>Premiere</emph></location><production>Nrityagram Odissi Repertoire</production><location>Madras Music Academy<date>6 OCT 2007</date></location><location>Madras Music Academy<date>9 JAN 2008</date></location><production>Pratimā: Reflection</production><location>Madras Music Academy<date>9 JAN 2009</date></location><location>Association of British Scholars, Chinmaya Hall<date>1 AUG 2009</date></location><production>Śriyaḥ</production><location>Madras Music Academy<date>9 JAN 2011</date></location><location>Rukmini Arangham, Kalakshetra<date>22 DEC 2013</date></location><location>Sri Krishna Gana Sabha<date>27 DEC 2014</date></location><location>Madras Music Academy<date>5 JAN 2016</date></location><location>Madras Music Academy<date>9 JAN 2017</date></location><location>Madras Music Academy<date>9 JAN 2018</date></location><location>Madras Music Academy<date>9 JAN 2019</date></location><production>Saṃhāra</production><location>Madras Music Academy<date>9 JAN 2013</date></location><production>Surupa & Bijayini</production><location>Kapaleeswarar Temple<date>12 JAN 2013</date></location><production>Saṃyoga</production><location>Madras Music Academy<date>9 JAN 2014</date></location><production>Songs of Love and Longing</production><location>Madras Music Academy<date>5 JAN 2015</date></location><production>Yadunandana</production><location>Sri Krishna Gana Sabha<date>22 DEC 2018</date></location><production>Surupa & Pavithra</production><location>Sri Krishna Gana Sabha<date>22 DEC 2019</date></location><production>Āhuti</production><location>Madras Music Academy<date>15 JAN 2023</date></location><production>Pavithra & Anoushka</production><location>Sri Krishna Gana Sabha<date>13 JAN 2024</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Chennai
  L.marker([ 19.017, 72.857 ], {
    icon: redIcon,
    title: "Mumbai, India",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Mumbai, India</city><production>Traditional Repertoire (Re-staged)</production><location>Nehru Centre<date>SEP 1995</date></location><production>Śrī (Odissi)</production><location>Homi Bhabha Auditorium<date>18 DEC 2002</date></location><location>Kalaghoda Festival<date>15 FEB 2003</date></location><production>Pratimā: Reflection</production><location>Kala Ghoda Festival<date>14 FEB 2010</date></location><production>Surupa & Bijayini</production><location>NCPA Experimental Theatre<date>16 FEB 2010</date></location><production>Saṃyoga</production><location>NCPA Tata Theatre<date>25 AUG 2012</date><emph>Premiere</emph></location><production>Saṃhãra</production><location>NCPA Jamshed Bhaba Theatre<date>2 SEP 2012</date></location><production>Songs of Love and Longing</production><location>NCPA TATA Theatre<date>25 APR 2015</date></location><production>Śriyaḥ</production><location>NCPA TATA Theatre<date>27 JAN 2017</date></location><location>NCPA TATA Theatre<date>22 APR 2017</date></location><location>NCPA TATA Theatre<date>1 DEC 2019</date></location><production>Āhuti</production><location>NCPA Jamshed Bhabha Theatre<date>10 AUG 2023</date></location><production>Khaṅkhaṇā</production><location>Kala Ghoda Arts Festival<date>20 JAN 2024</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Mumbai
  L.marker([ 20.296059, 85.824539 ], {
    icon: redIcon,
    title: "Bhubaneswar, India",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Bhubaneswar, India</city><production>Traditional Repertoire (Re-staged)</production><location>Konarak Natya Mandap<date>MAR 1994</date></location><production>Śrī (Odissi)</production><location>Rabindra Mandap<date>17-18 DEC 2004</date></location><production>Pratimā: Reflection</production><location>Dhauli Festival<date>14 DEC 2009</date></location><production>Surupa & Bijayini</production><location>Mukteshwar Festival<date>14 JAN 2011</date></location><production>Bijayini Solo</production><location>Rabindra Mandap<date>5 SEP 2013</date></location><location>Mukteshwar Festival<date>15 JAN 2016</date></location><production>Pavithra Solo</production><location>Rabindra Mandap<date>JUL 2014</date></location><production>Yadunandana</production><location>Mukteshwar Festival<date>14 JAN 2019</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Bhubaneswar
  L.marker([ 26.916129, 75.820406 ], {
    icon: redIcon,
    title: "Jaipur, India",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Jaipur, India</city><production>Traditional Repertoire (Re-staged)</production><location>Amber Festival<date>27 OCT 1996</date></location><production>Śrī (Odissi)</production><location>Jaipur Heritage International Festival<date>17 JAN 2004</date></location><production>Bijayini Solo</production><location>Jaipur Heritage International Festival<date>15-16 JAN 2005</date></location><production>Āhuti</production><location>Amber Fort for Jaipur Lit Fest<date>22 JAN 2023</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Jaipur
  L.marker([ 24.851513, 79.925979 ], {
    icon: redIcon,
    title: "Khajuraho, India",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Khajuraho, India</city><production>Protima Bedi & Ensemble</production><location>Khajuraho Dance Festival<date>FEB 1995</date></location><production>Ansh</production><location>Khajuraho Dance Festival<date>27 FEB 2005</date></location><production>Surupa & Bijayini</production><location>Khajuraho Dance Festival<date>7 FEB 2011</date></location><production>Saṃyoga</production><location>Khajuraho Festival<date>26 FEB 2014</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Khajuraho
  L.marker([ 21.149804, 79.080609 ], {
    icon: redIcon,
    title: "Nagpur, India",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Nagpur, India</city><production>Surupa Solo</production><location>Dr. V Deshpande Smruthi Sangeet Samaroaha<date>29 July 1996</date></location><production>Bijayini Solo</production><location>Kalidas Festival<date>15 NOV 2005</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Nagpur
  L.marker([ 12.9101, 75.003 ], {
    icon: redIcon,
    title: "Moodbidri, India",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Moodbidri, India</city><production>Sacred Space</production><location>Alva’s Virasat Festival<date>6 JAN 2006</date></location><production>Ansh</production><location>Alva’s Virasat Festival<date>7 JAN 2007</date></location><production>Pratimā: Reflection</production><location>Alva’s Virasat Festival<date>10 JAN 2010</date></location><production>Śriyaḥ</production><location>Alva’s Virasat Festival<date>20 DEC 2013</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Moodbidri
  L.marker([ 19.890833, 86.100278 ], {
    icon: redIcon,
    title: "Konarak, India",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Konarak, India</city><production>Sacred Space</production><location>Konarak Festival<date>2 DEC 2006</date></location><production>Saṃhāra</production><location>Konarak Festival<date>4 DEC 2012</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Konarak
  L.marker([ 13.341917, 74.747323 ], {
    icon: redIcon,
    title: "Udupi, India",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Udupi, India</city><production>Ansh</production><location>Udupi Temple<date>22 JAN 2008</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Udupi
  L.marker([ 16.254821, 80.920464 ], {
    icon: redIcon,
    title: "Kuchipudi, India",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Kuchipudi, India</city><production>Nrityagram Odissi Repertoire</production><location>Kuchipudi Festival<date>6 JAN 2009</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Kuchipudi
  L.marker([ 9.963386, 76.253661 ], {
    icon: redIcon,
    title: "Cochin, India",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Cochin, India</city><production>Śrī: In Search of the Goddess</production><location>Kerala Fine Arts Hall<date>28 JUL 2001</date></location><production>Śrī (Odissi)</production><location>Soorya Festival<date>5 OCT 2002</date></location><production>Pratimā: Reflection</production><location>Dharini Festival<date>1 NOV 2009</date></location><production>Surupa Solo</production><location>Sangeet Natak Academy<date>22 JAN 2011</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Cochin
  L.marker([ 8.505749, 76.957356 ], {
    icon: redIcon,
    title: "Trivandrum, India",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Trivandrum, India</city><production>Traditional Repertoire (Re-staged)</production><location>Soorya Festival<date>2 OCT 1998</date></location><production>Śrī (Odissi)</production><location>Soorya Festival<date>2 OCT 2002</date></location><production>Pratimā: Reflection</production><location>Soorya Festival<date>5 JAN 2010</date></location><location>Soorya Festival<date>2 OCT 2010</date></location><production>Śriyaḥ</production><location>Soorya Festival<date>7 OCT 2011</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Trivandrum
  L.marker([ 22.720385, 75.86821 ], {
    icon: redIcon,
    title: "Indore, India",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Indore, India</city><production>Traditional Repertoire (Re-staged)</production><location><date>FEB 1997</date></location><production>Nrityagram Odissi Repertoire</production><location>Chhandak Festival<date>4 JUL 2010</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Indore
  L.marker([ 18.520644, 73.854405 ], {
    icon: redIcon,
    title: "Pune, India",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Pune, India</city><production>Surupa Solo</production><location>The Buddha Hall, Osho Ashram<date>JUL 1997</date></location><production>Bijayini Solo</production><location>The Buddha Hall, Osho Ashram<date>JUL 1999</date></location><production>Surupa & Bijayini</production><location>Chinmaya Nada Bindu<date>20 SEP 2010</date></location><production>Songs of Love and Longing</production><location>Prayatna Dance Festival, Bal Gandharwa<date>28 APR 2015</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Pune
  L.marker([ 10.775923, 76.643801 ], {
    icon: redIcon,
    title: "Palakkad, India",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Palakkad, India</city><production>Śrī (Odissi)</production><location>Soorya Festival<date>4 OCT 2002</date></location><production>Pratimā: Reflection</production><location>Soorya Festival<date>1 OCT 2010</date></location><production>Śriyaḥ</production><location>Soorya Festival<date>8 OCT 2011</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Palakkad
  L.marker([ 10.52519, 76.215983 ], {
    icon: redIcon,
    title: "Thrissur, India",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Thrissur, India</city><production>Śrī (Odissi)</production><location>Soorya Festival<date>3 OCT 2002</date></location><production>Pratimā: Reflection</production><location>Soorya Festival<date>5 OCT 2010</date></location><production>Śriyaḥ</production><location>Soorya Festival<date>4 OCT 2011</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Thrissur
  L.marker([ 23.260663, 77.39406 ], {
    icon: redIcon,
    title: "Bhopal, India",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Bhopal, India</city><production>Śriyaḥ</production><location>Bharat Bhavan<date>14 FEB 2011</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Bhopal
  L.marker([ 11.244614, 75.775937 ], {
    icon: redIcon,
    title: "Kozhikode, India",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Kozhikode, India</city><production>Śrī (Odissi)</production><location>Soorya Festival<date>7 OCT 2002</date></location><production>Śriyaḥ</production><location>Soorya Festival<date>1 OCT 2011</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Kozhikode
  L.marker([ 11.876225, 75.373804 ], {
    icon: redIcon,
    title: "Kannur, India",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Kannur, India</city><production>Śriyaḥ</production><location>Soorya Festival<date>2 OCT 2011</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Kannur
  L.marker([ 9.988381, 76.286344 ], {
    icon: redIcon,
    title: "Ernakulam, India",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Ernakulam, India</city><production>Śriyaḥ</production><location>Soorya Festival<date>5 OCT 2011</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Ernakulam
  L.marker([ 9.849787, 76.979791 ], {
    icon: redIcon,
    title: "Idukki, India",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Idukki, India</city><production>Śriyaḥ</production><location>Soorya Festival<date>11 OCT 2011</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Idukki
  L.marker([ 24.578723, 73.686255 ], {
    icon: redIcon,
    title: "Udaipur, India",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Udaipur, India</city><production>Surupa & Bijayini</production><location>Mewar Foundation, Jag Mandir Palace<date>10 NOV 2011</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Udaipur
  L.marker([ 17.361623, 78.474731 ], {
    icon: redIcon,
    title: "Hyderabad, India",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Hyderabad, India</city><production>Surupa Solo</production><location>Ravindra Bharati<date>26 JAN 2000</date></location><production>Śrī (Odissi)</production><location>Shilparaman<date>3 DEC 2003</date></location><production>Śriyaḥ</production><location>Ravindra Bharathi<date>15 DEC 2011</date></location><location>Ravindra Bharathi<date>6 DEC 2014</date></location><location>Gudi Sambaraalu, Sri Lakshmanji Maharaj Temple<date>31 JAN 2016</date></location><production>Saṃhāra</production><location>Gudi Sambaraalu, Shamshabad Rama Temple<date>20 JAN 2018</date></location><production>Āhuti</production><location>Gudi Sambaraalu, Central Park<date>9 APR 2024</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Hyderabad
  L.marker([ 18.673269, 78.097848 ], {
    icon: redIcon,
    title: "Nizamabad, India",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Nizamabad, India</city><production>Śriyaḥ</production><location>Gudi Sambaraalu, Khilla Ramalayam Temple<date>4-5 FEB 2017</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Nizamabad
  L.marker([ 11.001812, 76.962843 ], {
    icon: redIcon,
    title: "Coimbatore, India",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Coimbatore, India</city><production>Saṃyoga</production><location>Yaksha Festival, Isha Yoga Center<date>23 FEB 2017</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Coimbatore
  L.marker([ 14.449372, 79.987376 ], {
    icon: redIcon,
    title: "Nellore, India",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Nellore, India</city><production>Saṃhāra</production><location>Gudi Sambaraalu, Rajarajeshwari Temple<date>13 JAN 2018</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Nellore
  L.marker([ 16.508759, 80.61851 ], {
    icon: redIcon,
    title: "Vijayawada, India",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Vijayawada, India</city><production>Saṃhāra</production><location>Gudi Sambaraalu<date>15 JAN 2018</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Vijayawada
  L.marker([ 26.8381, 80.9346 ], {
    icon: redIcon,
    title: "Lucknow, India",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Lucknow, India</city><production>Traditional Repertoire (Re-staged)</production><location>Lucknow Mahotsav<date>29 NOV 1999</date></location><production>Śriyaḥ</production><location>Sanatkada Festival<date>2 FEB 2018</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Lucknow
  L.marker([ 15.498992, 73.828214 ], {
    icon: redIcon,
    title: "Panaji, India",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Panaji, India</city><production>Saṃhāra</production><location>Serendipity Arts Festival<date>15 DEC 2018</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Panaji
  L.marker([ 30.720451, 76.76697 ], {
    icon: redIcon,
    title: "Chandigarh, India",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Chandigarh, India</city><production>Protima Bedi & Ensemble</production><location>Tagore Theater<date>26 FEB 1995</date></location><location>Rose Festival<date>27 FEB 1998</date></location><production>Surupa Solo</production><location>Tagore Theater<date>21 FEB 1998</date></location><location>Tagore Theater<date>9 OCT 1999</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Chandigarh
  L.marker([ 23.021624, 72.579707 ], {
    icon: redIcon,
    title: "Ahmedabad, India",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Ahmedabad, India</city><production>Traditional Repertoire (Re-staged)</production><location>Tagore Hall<date>21 FEB 1997</date></location><production>Ansh</production><location>Tagore Hall<date>10 FEB 2007</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Ahmedabad
  L.marker([ 8.887094, 76.590684 ], {
    icon: redIcon,
    title: "Kollam, India",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Kollam, India</city><production>Traditional Repertoire (Re-staged)</production><location>Soorya Festival<date>3 OCT 1998</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Kollam
  L.marker([ 13.931172, 75.569737 ], {
    icon: redIcon,
    title: "Shimoga, India",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Shimoga, India</city><production>Śrī (Odissi)</production><location>Ninasam<date>17 OCT 2002</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Shimoga
  L.marker([ 12.951, 75.371 ], {
    icon: redIcon,
    title: "Dharmasthala, India",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Dharmasthala, India</city><production>Ansh</production><location>Nadavalli Festival<date>22 FEB 2005</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Dharmasthala
  L.marker([ 15.334444, 76.462222 ], {
    icon: redIcon,
    title: "Hampi, India",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Hampi, India</city><production>Bijayini Solo</production><location>Hampi Festival<date>25 JAN 2014</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Hampi
  L.marker([ 13.161, 77.45 ], {
    icon: redIcon,
    title: "Nrityagram Amphitheatre, India",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Nrityagram Amphitheatre, India</city><production>Vasantahabba</production><location>Amphitheatre Nrityagram<date>5 FEB 1994</date></location><location>Amphitheatre Nrityagram<date>4 FEB 1995</date></location><location>Amphitheatre Nrityagram<date>10 FEB 1996</date></location><location>Amphitheatre Nrityagram<date>6 FEB 1999</date></location><location>Amphitheatre Nrityagram<date>3 FEB 2001</date></location><location>Amphitheatre Nrityagram<date>2 FEB 2002</date></location><location>Amphitheatre Nrityagram<date>1 FEB 2003</date></location><location>Amphitheatre Nrityagram<date>7 FEB 2004</date></location><production>Surupa Solo at Vasantahabba</production><location>Amphitheatre Nrityagram<date>1 FEB 1997</date></location><production>Bijayini Solo at Vasantahabba</production><location>Amphitheatre Nrityagram<date>7 FEB 1998</date></location><production>NrityaUtsarga</production><location>Amphitheatre Nrityagram<date>18 AUG 2017</date></location><location>Amphitheatre Nrityagram<date>29 DEC 2017</date></location><production>NrityaUtsarga.Digital</production><location>Nrityagram Online<date>18 AUG 2020</date></location><location>Nrityagram Online<date>18 AUG 2021</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Nrityagram Amphitheatre
  L.marker([ 12.86981, 74.843008 ], {
    icon: redIcon,
    title: "Mangalore, India",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Mangalore, India</city><production>Bijayini Solo</production><location>Nupura Utsav, Town Hall<date>30 OCT 2004</date></location>",
      {
        maxHeight: 200,
        maxWidth: 300,
      }
    ); // Mangalore
  L.marker([ 22.11, 75.35 ], {
    icon: redIcon,
    title: "Maheswar, India",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Maheswar, India</city><production>Traditional Repertoire (Re-staged)</production><location><date>FEB 1997</date></location><production>Ansh</production><location>Sacred River Festival, Maheshwar Fort<date>18 FEB 2007</date></location>",
      {
        maxHeight: 200,
        maxWidth: 300,
      }
    ); // Maheswar
  L.marker([ 22.245583, 76.151056 ], {
    icon: redIcon,
    title: "Omkareshwar, India",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Omkareshwar, India</city><production>Traditional Repertoire (Re-staged)</production><location><date>FEB 1997</date></location>",
      {
        maxHeight: 200,
        maxWidth: 300,
      }
    ); // Omkareshwar
  L.marker([ 22.335278, 75.415833 ], {
    icon: redIcon,
    title: "Mandu, India",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Mandu, India</city><production>Traditional Repertoire (Re-staged)</production><location><date>FEB 1997</date></location>",
      {
        maxHeight: 200,
        maxWidth: 300,
      }
    ); // Mandu
  L.marker([ 18.763, 73.557 ], {
    icon: redIcon,
    title: "Kamshet, India",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Kamshet, India</city><production>Bijayini Solo</production><location>Kamshet Arts Festival<date>1 MAR 2014</date></location>",
      {
        maxHeight: 200,
        maxWidth: 300,
      }
    ); // Kamshet
  L.marker([ 19.873954, 75.32778 ], {
    icon: redIcon,
    title: "Aurangabad, India",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Aurangabad, India</city><production>Surupa & Bijayini</production><location>Ellora Festival<date>21 DEC 2002</date></location>",
      {
        maxHeight: 200,
        maxWidth: 300,
      }
    ); // Aurangabad
  L.marker([ 27.175255, 78.009816 ], {
    icon: redIcon,
    title: "Agra, India",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Agra, India</city><production>Protima Bedi & Ensemble</production><location>TAJ Mahotsav<date>FEB 1995</date></location>",
      {
        maxHeight: 200,
        maxWidth: 300,
      }
    ); // Agra

  // +++++++++++++++++  NORTH AMERICA  +++++++++++++++++
  L.marker([ 40.7834, -73.9662 ], {
    icon: redIcon,
    title: "New York NY, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>New York, NY, USA</city><production>Ensemble NY Debut</production><location>Kaye Playhouse, Hunter College<date>18 JUN 1996</date></location><production>NDE 1 & 2 Traditional Repertoire (Re-staged)</production><location>Waldorf Astoria<date>15 AUG 1997</date></location><location>Downtown Dance Festival, Battery Park<date>27 AUG 1997</date></location><location>Symphony Space<date>4 OCT 1997</date></location><production>Traditional Repertoire (Re-staged)</production><location>Kaye Playhouse, Hunter College<date>8 JAN 1999</date></location><location>Queens Theatre in the Park<date>16-17 JAN 1999</date></location><production>Śrī: In Search of the Goddess</production><location>Symphony Space<date>20-21 APR 2002</date></location><production>Śrī (Odissi)</production><location>Central Park SummerStage<date>9 JUL 2003</date></location><production>Ansh</production><location>Joyce Theater<date>12-17 APR 2005</date></location><production>Sacred Space</production><location>NYU Skirball Center for the Performing Arts<date>12-13 MAY 2006</date></location><production>Pratimā: Reflection</production><location>Joyce Theater<date>19-24 FEB 2008</date><emph>Premiere</emph></location><production>Saṃhāra</production><location>Joyce Theater<date>20-25 MAR 2012</date></location><location>Queens Theatre in the Park<date>29-30 SEP 2018</date></location><production>Saṃyoga</production><location>NYU Skirball Center for the Performing Arts<date>6-7 APR 2013</date></location><location>Temple of Dendur, MET Museum<date>11 JAN 2015</date></location><production>Vibhakta</production><location>Fall for Dance at City Centre<date>27-28 SEP 2013</date></location><production>Songs of Love and Longing</production><location>Baryshnikov Arts Center<date>1-2 MAY 2014</date></location><production>Shivashtakam</production><location>Fall for Dance at City Center<date>8-9 OCT 2015</date></location><production>Śriyaḥ</production><location>Lincoln Center's White Light Festival<date>2 & 4 OCT 2016</date></location><production>Saṃhāra Revisited</production><location>The Temple of Dendur, MET Museum<date>27-28 OCT 2018</date></location><production>Poornāratī Āhuti</production><location>Fall for Dance at City Center<date>1-2 OCT 2022</date></location><production>Āhuti</production><location>Joyce Theater<date>9-14 MAY 2023</date></location><production>APAP Showcase.Digital</production><location>APAP Online<date>7 JAN 2021</date></location><location>APAP Online<date>11 JAN 2022</date></location><production>Vinati.Digital</production><location>World Music Institute Online<date>23 MAY 2021</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // New York
  L.marker([ 51.046362, -114.05803 ], {
    icon: redIcon,
    title: "Calgary AL, Canada",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Calgary AL, Canada</city><production>Protima Bedi & Party</production><location><date>SEP 1993</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Calgary AL, Canada
  L.marker([ 39.744432, -75.5451 ], {
    icon: redIcon,
    title: "Wilmington DE, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Wilmington DE, USA</city><production>Protima Bedi & Party</production><location><date>SEP 1993</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Wilmington DE, USA
  L.marker([ 38.186901, -76.4347 ], {
    icon: redIcon,
    title: "St. Mary's City MD, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>St. Mary's City MD, USA</city><production>Protima Bedi & Party</production><location>St. Mary’s College<date>OCT 1993</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // St. Mary's City, USA
  L.marker([ 38.892062, -77.019912 ], {
    icon: redIcon,
    title: "Washington DC, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Washington DC, USA</city><production>Sacred Space</production><location>National Geographic Conference<date>3 MAY 2006</date></location><production>Śriyaḥ</production><location>Kennedy Center for the Performing Arts<date>6 MAR 2011</date></location><production>Saṃyoga</production><location>Kennedy Center for the Performing Arts<date>21 SEP 2013</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Washington DC, USA
  L.marker([ 41.675032, -86.251962 ], {
    icon: redIcon,
    title: "South Bend IN, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>South Bend IN, USA</city><production>Protima Bedi & Party</production><location>O’Laughlin Auditorium, St. Mary’s College<date>OCT 1993</date></location><production>Traditional Repertoire (Re-staged)</production><location>O’Laughlin Auditorium, St. Mary’s College<date>21 APR 1996</date></location><location>Notre Dame University<date>4 MAY 1996</date></location><production>NDE 2 + Surupa</production><location>Notre Dame University<date>29 AUG 1997</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // South Bend IN, USA
  L.marker([ 43.073926, -89.385244 ], {
    icon: redIcon,
    title: "Madison WI, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Madison WI, USA</city><production>Protima Bedi & Party</production><location>Wisconsin Union Theater<date>16 OCT 1993</date></location><production>Pratimā: Reflection</production><location>Wisconsin Union Theater<date>6 MAR 2010</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Madison WI, USA
  L.marker([ 41.051924, -73.539475 ], {
    icon: redIcon,
    title: "Stamford CT, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Stamford CT, USA</city><production>Traditional Repertoire (Re-staged)</production><location><date>16 JUN 1996</date></location><production>NDE 1 & 2 Traditional Repertoire (Re-staged)</production><location>Stamford Performing Arts Center<date>9 SEP 1997</date></location><production>Śrī: In Search of the Goddess</production><location>Rich Forum, Stamford Center for the Arts<date>2 MAY 2002</date></location><production>Sacred Space</production><location>Rich Forum, Stamford Center for the Arts<date>6 AUG 2006</date></location><production>Pratimā: Reflection</production><location>The Palace Theatre, Stamford Center for the Arts<date>29 FEB 2008</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Stamford CT, USA
  L.marker([ 42.887691, -78.879374 ], {
    icon: redIcon,
    title: "Buffalo NY, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Buffalo NY, USA</city><production>Protima Bedi & Party</production><location><date>OCT 1993</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Buffalo NY, USA
  L.marker([ 33.522859, -86.807705 ], {
    icon: redIcon,
    title: "Birmingham AL, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Birmingham AL, USA</city><production>Protima Bedi & Party</production><location><date>OCT 1993</date></location><production>Traditional Repertoire (Re-staged)</production><location><date>18 MAY 1996</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Birmingham AL, USA
  L.marker([ 47.035534, -122.900827 ], {
    icon: redIcon,
    title: "Olympia WA, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Olympia WA, USA</city><production>Protima Bedi & Party</production><location>Evergreen State College<date>NOV 1993</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Olympia WA, USA
  L.marker([ 34.576469, -118.116103 ], {
    icon: redIcon,
    title: "Palmdale CA, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Palmdale CA, USA</city><production>Protima Bedi & Party</production><location><date>NOV 1993</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Palmdale CA, USA
  L.marker([ 37.445103, -122.160363 ], {
    icon: redIcon,
    title: "Palo Alto CA, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Palo Alto CA, USA</city><production>Protima Bedi & Party</production><location><date>NOV 1993</date></location><production>Traditional Repertoire (Re-staged)</production><location><date>MAR 2000</date></location><production>Saṃyoga</production><location>Bing Concert Hall, Stanford University<date>26 SEP 2015</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Palo Alto CA, USA
  L.marker([ 36.731654, -119.785856 ], {
    icon: redIcon,
    title: "Fresno CA, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Fresno CA, USA</city><production>Traditional Repertoire (Re-staged)</production><location><date>MAY 1996</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Fresno CA, USA
  L.marker([ 43.155708, -77.612547 ], {
    icon: redIcon,
    title: "Rochester NY, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Rochester NY, USA</city><production>Traditional Repertoire (Re-staged)</production><location>Rochester University<date>13 SEP 1997</date></location><location>Nazareth College<date>12 NOV 1999</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Rochester NY, USA
  L.marker([ 29.651958, -82.325024 ], {
    icon: redIcon,
    title: "Gainesville FL, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Gainesville FL, USA</city><production>Traditional Repertoire (Re-staged)</production><location>University of Florida<date>21 SEP 1997</date></location><production>Sacred Space</production><location>University of Florida Performing Arts<date>1 APR 2006</date></location><production>Āhuti</production><location>Phillips Center<date>22 APR 2023</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Gainesville FL, USA
  L.marker([ 37.028265, -76.342338 ], {
    icon: redIcon,
    title: "Hampton VA, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Hampton VA, USA</city><production>Traditional Repertoire (Re-staged)</production><location>Ogden Hall, Hampton Arts Commission<date>27 SEP 1997</date></location><production>Sacred Space</production><location>American Theatre, Hampton Arts Commission<date>9-10 MAY 2006</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Hampton VA, USA
  L.marker([ 40.925686, -73.141129 ], {
    icon: redIcon,
    title: "Stony Brook NY, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Stony Brook NY, USA</city><production>Traditional Repertoire (Re-staged)</production><location>Staller Center, SUNY<date>18 OCT 1997</date></location><production>Pratimā: Reflection</production><location>Charles B. Wang Center, Stony Brook University<date>13 APR 2008</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Stony Brook NY, USA
  L.marker([ 40.950936, -73.734667 ], {
    icon: redIcon,
    title: "Mamaroneck NY, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Mamaroneck NY, USA</city><production>Traditional Repertoire (Re-staged)</production><location>Emelin Theater<date>27 OCT 1997</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Mamaroneck NY, USA
  L.marker([ 26.609859, -80.058568 ], {
    icon: redIcon,
    title: "Lake Worth FL, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Lake Worth FL, USA</city><production>Traditional Repertoire (Re-staged)</production><location>Duncan Theater<date>5 MAR 1999</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Lake Worth FL, USA
  L.marker([ 40.79664, -74.481595 ], {
    icon: redIcon,
    title: "Morristown NJ, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Morristown NJ, USA</city><production>Traditional Repertoire (Re-staged)</production><location>Community Theater<date>9 MAR 1999</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Morristown NJ, USA
  L.marker([ 43.75088, -87.712907 ], {
    icon: redIcon,
    title: "Sheboygan WI, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Sheboygan WI, USA</city><production>Traditional Repertoire (Re-staged)</production><location>Kohler Arts Center<date>19 MAR 1999</date></location><production>Śrī: In Search of the Goddess</production><location>JMKAC Auditorium, John Michael Kohler Arts Center<date>11 APR 2002</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Sheboygan WI, USA
  L.marker([ 41.852223, -88.312268 ], {
    icon: redIcon,
    title: "Batavia IL, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Batavia IL, USA</city><production>Traditional Repertoire (Re-staged)</production><location>Ramsey Auditorium, Fermilab<date>27 MAR 1999</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Batavia IL, USA
  L.marker([ 45.679294, -111.046611 ], {
    icon: redIcon,
    title: "Bozeman MT, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Bozeman MT, USA</city><production>Traditional Repertoire (Re-staged)</production><location>Emerson Cultural Center<date>2 APR 1999</date></location><location>Emerson Cultural Center<date>31 MAR 2000</date></location><production>Saṃyoga</production><location>Ellen Theatre<date>15 APR 2014</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Bozeman MT, USA
  L.marker([ 47.25308, -122.44153 ], {
    icon: redIcon,
    title: "Tacoma WA, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Tacoma WA, USA</city><production>Traditional Repertoire (Re-staged)</production><location>Broadway Center for the Arts<date>9 APR 1999</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Tacoma WA, USA
  L.marker([ 38.546421, -121.745384 ], {
    icon: redIcon,
    title: "Davis CA, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Davis CA, USA</city><production>Traditional Repertoire (Re-staged)</production><location>Freeborn Hall, University of California<date>16 APR 1999</date></location><production>Sacred Space</production><location>University of California<date>1-2 MAR 2006</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Davis CA, USA
  L.marker([ 41.505546, -81.6915 ], {
    icon: redIcon,
    title: "Cleveland OH, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Cleveland OH, USA</city><production>Traditional Repertoire (Re-staged)</production><location>Gartner Auditorium, Cleveland Museum of Art<date>19 NOV 1999</date></location><production>Śrī: In Search of the Goddess</production><location>Gartner Auditorium, Cleveland Museum of Art<date>8 MAR 2002</date></location><production>Śriyaḥ</production><location>Gartner Auditorium, Cleveland Museum of Art<date>11 MAR 2011</date></location><production>Saṃyoga</production><location>Gartner Auditorium, Cleveland Museum of Art<date>10-11 APR 2014</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Cleveland OH, USA
  L.marker([ 25.775084, -80.194702 ], {
    icon: redIcon,
    title: "Miami FL, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Miami FL, USA</city><production>Traditional Repertoire (Re-staged)</production><location>The Colony Theater, Miami Beach<date>25 NOV 1999</date></location><location>The Colony Theater, Miami Beach<date>27 FEB 2000</date></location><production>Śrī: In Search of the Goddess</production><location>New World Symphony, Miami Beach<date>17 MAR 2002</date></location><production>Sacred Space</production><location>The Colony Theater, Miami Beach<date>7-8 APR 2006</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Miami FL, USA
  L.marker([ 24.559703, -81.783642 ], {
    icon: redIcon,
    title: "Key West FL, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Key West FL, USA</city><production>Traditional Repertoire (Re-staged)</production><location>Tennessee Williams Fine Arts Center<date>25 FEB 2000</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Key West FL, USA
  L.marker([ 32.777977, -96.796215 ], {
    icon: redIcon,
    title: "Dallas TX, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Dallas TX, USA</city><production>Traditional Repertoire (Re-staged)</production><location>Texas International Theatrical Arts Society, McFarlin Auditorium<date>18-19 FEB 2000</date></location><production>Āhuti</production><location>Moody Performance Hall<date>28-29 OCT 2022</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Dallas TX, USA
  L.marker([ 36.596808, -121.897127 ], {
    icon: redIcon,
    title: "Monterey CA, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Monterey CA, USA</city><production>Traditional Repertoire (Re-staged)</production><location>Golden State Theater<date>MAR 2000</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Monterey CA, USA
  L.marker([ 36.552508, -121.924435 ], {
    icon: redIcon,
    title: "Carmel CA, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Carmel CA, USA</city><production>Traditional Repertoire (Re-staged)</production><location><date>MAR 2000</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Carmel CA, USA
  L.marker([ 40.442169, -79.994945 ], {
    icon: redIcon,
    title: "Pittsburgh PA, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Pittsburgh PA, USA</city><production>Śrī: In Search of the Goddess</production><location>Pittsburgh Dance Council, Byham Theater<date>23 MAR 2002</date></location><production>Saṃyoga</production><location>Pittsburgh Dance Council, Byham Theater<date>3 OCT 2015</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Pittsburgh PA, USA
  L.marker([ 32.221878, -110.971225 ], {
    icon: redIcon,
    title: "Tucson AZ, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Tucson AZ, USA</city><production>Śrī: In Search of the Goddess</production><location>Centennial Hall, University of Arizona<date>29-30 MAR 2002</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Tucson AZ, USA
  L.marker([ 40.801899, -77.856697 ], {
    icon: redIcon,
    title: "University Park PA, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>University Park PA, USA</city><production>Śrī: In Search of the Goddess</production><location>Eisenhower Auditorium, PENN State University<date>3 APR 2002</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // University Park PA, USA
  L.marker([ 43.700835, -72.289408 ], {
    icon: redIcon,
    title: "Hanover NH, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Hanover NH, USA</city><production>Śrī: In Search of the Goddess</production><location>Hopkins Center, Dartmouth College<date>16 APR 2002</date></location><production>Pratimā: Reflection</production><location>Hopkins Center, Dartmouth College<date>21 APR 2009</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Hanover NH, USA
  L.marker([ 38.847183, -77.306292 ], {
    icon: redIcon,
    title: "Fairfax VA, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Fairfax VA, USA</city><production>Śrī: In Search of the Goddess</production><location>George Mason University Center for the Arts<date>26 APR 2002</date></location><production>Sacred Space</production><location>George Mason University Center for the Arts<date>5 MAY 2006</date></location><production>Āhuti</production><location>George Mason University Concert Hall<date>5 NOV 2022</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Fairfax VA, USA
  L.marker([ 39.951061, -75.16562 ], {
    icon: redIcon,
    title: "Philadelphia PA, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Philadelphia PA, USA</city><production>Śrī: In Search of the Goddess</production><location>Zellerbach Theater, Annenberg Center for Performing Arts<date>12 JUL 2003</date></location><production>Āhuti</production><location>Zellerbach Theater, Annenberg Center for Performing Arts<date>5-6 MAY 2023</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Philadelphia PA, USA
  L.marker([ 40.689353, -75.216698 ], {
    icon: redIcon,
    title: "Easton PA, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Easton PA, USA</city><production>Ansh</production><location>Williams Center for the Arts, Lafayette College<date>19 APR 2005</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Easton PA, USA
  L.marker([ 39.738453, -104.984853 ], {
    icon: redIcon,
    title: "Denver CO, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Denver CO, USA</city><production>Ansh</production><location>Concert Hall, Kenneth King Center, University of Colorado<date>26 MAR 2005</date></location><production>Śriyaḥ</production><location>Gates Concert Hall, Newman Center for the Performing Arts<date>5-6 APR 2018</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Denver CO, USA
  L.marker([ 38.835224, -104.819798 ], {
    icon: redIcon,
    title: "Colorado Springs CO, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Colorado Springs CO, USA</city><production>Ansh</production><location>Armstrong Theater, Colorado College<date>3 APR 2005</date></location><production>Sacred Space</production><location>Armstrong Theater, Colorado College<date>12 MAR 2006</date></location><production>Pratimā: Reflection</production><location>Colorado Springs Dance Theater<date>1 MAY 2009</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Colorado Springs CO, USA
  L.marker([ 41.765775, -72.673356 ], {
    icon: redIcon,
    title: "Hartford CT, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Hartford CT, USA</city><production>Ansh</production><location>Theater of The Performing Arts, The Learning Corridor<date>9 APR 2005</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Hartford CT, USA
  L.marker([ 42.358894, -71.056742 ], {
    icon: redIcon,
    title: "Boston MA, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Boston MA, USA</city><production>Ansh</production><location>Zero Arrow Theater, Harvard Square<date>29 APR-1 MAY 2005</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Boston MA, USA
  L.marker([ 20.022241, -155.673932 ], {
    icon: redIcon,
    title: "Kamuela HI, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Kamuela HI, USA</city><production>Sacred Space</production><location>Kahilu Theater<date>20-21 FEB 2006</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Kamuela HI, USA
  L.marker([ 20.888034, -156.46785 ], {
    icon: redIcon,
    title: "Kahului HI, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Kahului HI, USA</city><production>Sacred Space</production><location>Maui Arts & Cultural Center<date>22-23 FEB 2006</date></location><production>Saṃhāra</production><location>Maui Arts & Cultural Center<date>21 FEB 2013</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Kahului HI, USA
  L.marker([ 21.398204, -157.968395 ], {
    icon: redIcon,
    title: "Pearl City HI, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Pearl City HI, USA</city><production>Sacred Space</production><location>Leeward Community College<date>25 FEB 2006</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Pearl City HI, USA
  L.marker([ 37.78008, -122.420168 ], {
    icon: redIcon,
    title: "San Francisco CA, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>San Francisco CA, USA</city><production>Sacred Space</production><location>Yerba Buena Center for the Arts<date>3-4 MAR 2006</date></location><production>Śriyaḥ</production><location>Palace of Fine Arts<date>31 MAR 2011</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // San Francisco CA, USA
  L.marker([ 36.604439, -121.854625 ], {
    icon: redIcon,
    title: "Seaside CA, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Seaside CA, USA</city><production>Sacred Space</production><location>CSU Monterey Bay<date>8-9 MAR 2006</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Seaside CA, USA
  L.marker([ 44.052153, -123.091195 ], {
    icon: redIcon,
    title: "Eugene OR, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Eugene OR, USA</city><production>Traditional Repertoire (Re-staged)</production><location><date>APR 1999</date></location><location><date>MAR 2000</date></location><production>Sacred Space</production><location>Hult Center for the Performing Arts<date>22 MAR 2006</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Eugene OR, USA
  L.marker([ 27.947423, -82.458776 ], {
    icon: redIcon,
    title: "Tampa FL, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Tampa FL, USA</city><production>Sacred Space</production><location>Tampa Bay Performing Arts Center<date>15 APR 2006</date></location><production>Pratimā: Reflection</production><location>Tampa Bay Performing Arts Center<date>8 APR 2009</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Tampa FL, USA
  L.marker([ 42.281419, -83.748478 ], {
    icon: redIcon,
    title: "Ann Arbor MI, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Ann Arbor MI, USA</city><production>Sacred Space</production><location>University Musical Society<date>18-19 APR 2006</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Ann Arbor MI, USA
  L.marker([ 29.760803, -95.369506 ], {
    icon: redIcon,
    title: "Houston TX, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Houston TX, USA</city><production>Sacred Space</production><location>Zilkha Hall<date>23 APR 2006</date></location><production>Pratimā: Reflection</production><location>Miller Outdoor Theater<date>25 APR 2009</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Houston TX, USA
  L.marker([ 30.264979, -97.746598 ], {
    icon: redIcon,
    title: "Austin TX, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Austin TX, USA</city><production>Sacred Space</production><location>One World Theater<date>23 APR 2006</date></location><production>Pratimā: Reflection</production><location>Akins Theater<date>21 MAR 2009</date></location><production>Songs of Love and Longing</production><location>Fine Arts Center<date>24 JAN 2015</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Austin TX, USA
  L.marker([ 32.77647, -79.931027 ], {
    icon: redIcon,
    title: "Charleston SC, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Charleston SC, USA</city><production>Sacred Space</production><location>Spoleto Festival<date>26-31 MAY 2006</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Charleston SC, USA
  L.marker([ 42.333272, -73.086534 ], {
    icon: redIcon,
    title: "Becket MA, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Becket MA, USA</city><production>Sacred Space</production><location>Jacob’s Pillow Dance Festival<date>19-23 JUL 2006</date></location><production>Upadāna.Digital</production><location>Jacob’s Pillow Dance Festival Online<date>12 JUN 2021</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Becket MA, USA
  L.marker([ 39.190665, -106.819201 ], {
    icon: redIcon,
    title: "Aspen CO, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Aspen CO, USA</city><production>Sacred Space</production><location>Aspen District Theatre<date>1 AUG 2006</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Aspen CO, USA
  L.marker([ 35.692133, -105.939593 ], {
    icon: redIcon,
    title: "Santa Fe NM, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Santa Fe NM, USA</city><production>Sacred Space</production><location>Lensic Performing Arts Center<date>2 AUG 2006</date></location><production>Pratimā: Reflection</production><location>Lensic Performing Arts Center<date>29 MAR 2008</date></location><production>Śriyaḥ</production><location>Lensic Performing Arts Center<date>8 APR 2011</date></location><production>Saṃhāra</production><location>Lensic Performing Arts Center<date>27 SEP 2018</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Santa Fe NM, USA
  L.marker([ 35.910262, -79.055474 ], {
    icon: redIcon,
    title: "Chapel Hill NC, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Chapel Hill NC, USA</city><production>Pratimā: Reflection</production><location>Memorial Hall, University of North Carolina at Chapel Hill<date>2 MAR 2008</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Chapel Hill NC, USA
  L.marker([ 37.540759, -77.433932 ], {
    icon: redIcon,
    title: "Richmond VA, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Richmond VA, USA</city><production>Pratimā: Reflection</production><location>Modlin Center for the Performing Arts, University of Richmond<date>4-5 MAR 2008</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Richmond VA, USA
  L.marker([ 26.011757, -80.139055 ], {
    icon: redIcon,
    title: "Hollywood FL, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Hollywood FL, USA</city><production>Pratimā: Reflection</production><location>Arts & Culture Center<date>7-9 MAR 2008</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Hollywood FL, USA
  L.marker([ 30.325968, -81.65676 ], {
    icon: redIcon,
    title: "Jacksonville FL, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Jacksonville FL, USA</city><production>Pratimā: Reflection</production><location>The Florida Theatre<date>14 MAR 2008</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Jacksonville FL, USA
  L.marker([ 32.08059, -81.090103 ], {
    icon: redIcon,
    title: "Savannah GA, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Savannah GA, USA</city><production>Pratimā: Reflection</production><location>Savannah Music Festival, Lucas Theatre<date>21 MAR 2008</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Savannah GA, USA
  L.marker([ 34.420867, -119.698342 ], {
    icon: redIcon,
    title: "Santa Barbara CA, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Santa Barbara CA, USA</city><production>Pratimā: Reflection</production><location>Campbell Hall, University of California Santa Barbara<date>3 APR 2008</date></location><production>Śriyaḥ</production><location>Campbell Hall, University of California Santa Barbara<date>29 JAN 2015</date></location><production>Āhuti</production><location>Campbell Hall, UC Santa Barbara<date>19 OCT 2022</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Santa Barbara CA, USA
  L.marker([ 38.984757, -77.094135 ], {
    icon: redIcon,
    title: "Bethesda MD, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Bethesda MD, USA</city><production>Pratimā: Reflection</production><location>The Music Center at Strathmore<date>19 MAR 2009</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Bethesda MD, USA
  L.marker([ 40.454773, -86.915695 ], {
    icon: redIcon,
    title: "West Lafayette IN, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>West Lafayette IN, USA</city><production>Pratimā: Reflection</production><location>Purdue Convocations<date>27 MAR 2009</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // West Lafayette IN, USA
  L.marker([ 42.521406, -70.89864 ], {
    icon: redIcon,
    title: "Salem MA, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Salem MA, USA</city><production>Pratimā: Reflection</production><location>The Peabody Museum<date>4 APR 2009</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Salem MA, USA
  L.marker([ 53.546135, -113.491213 ], {
    icon: redIcon,
    title: "Edmonton AL, Canada",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Edmonton AL, Canada</city><production>Pratimā: Reflection</production><location>Myer Horowitz Theatre<date>11 APR 2009</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Edmonton AL Canada
  L.marker([ 42.026802, -93.620181 ], {
    icon: redIcon,
    title: "Ames IA, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Ames IA, USA</city><production>Pratimā: Reflection</production><location>Ames City Auditorium<date>18 APR 2009</date></location><production>Saṃhāra</production><location>Ames City Auditorium<date>7 APR 2012</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Ames IA, USA
  L.marker([ 45.516018, -122.681425 ], {
    icon: redIcon,
    title: "Portland OR, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Portland OR, USA</city><production>Pratimā: Reflection</production><location>Kalakendra<date>3 MAY 2009</date></location><production>Ansh</production><location>Kalakendra<date>3 APR 2010</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Portland OR, USA
  L.marker([ 45.586019, -95.914027 ], {
    icon: redIcon,
    title: "Morris MN, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Morris MN, USA</city><production>Pratimā: Reflection</production><location>Edson Auditorium, University of Minnesota<date>27 FEB 2010</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Morris MN, USA
  L.marker([ 42.781472, -84.482761 ], {
    icon: redIcon,
    title: "East Lansing MI, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>East Lansing MI, USA</city><production>Pratimā: Reflection</production><location>Pasant Theater, Michigan State University<date>17-18 MAR 2010</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // East Lansing MI, USA
  L.marker([ 44.759092, -85.605469 ], {
    icon: redIcon,
    title: "Traverse City MI, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Traverse City MI, USA</city><production>Pratimā: Reflection</production><location>Milliken Auditorium<date>19-20 MAR 2010</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Traverse City MI, USA
  L.marker([ 36.166687, -86.779932 ], {
    icon: redIcon,
    title: "Nashville TN, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Nashville TN, USA</city><production>Pratimā: Reflection</production><location>Ingram Hall, Vanderbilt University<date>25 MAR 2010</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Nashville TN, USA
  L.marker([ 40.249271, -75.242783 ], {
    icon: redIcon,
    title: "Montgomery County PA, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Montgomery County PA, USA</city><production>Pratimā: Reflection</production><location>Science Center Auditorium<date>27 MAR 2010</date></location><production>Saṃhāra</production><location>Science Center Auditorium<date>13 APR 2013</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Montgomery County PA, USA
  L.marker([ 47.603229, -122.33028 ], {
    icon: redIcon,
    title: "Seattle WA, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Seattle WA, USA</city><production>Pratimā: Reflection</production><location>Moore Theater<date>16-17 APR 2010</date></location><production>Saṃhāra</production><location>Meany Center for the Performing Arts<date>4-6 OCT 2018</date></location><production>Āhuti</production><location>Meydenbauer Center<date>11 OCT 2022</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Seattle WA, USA
  L.marker([ 38.365568, -75.599181 ], {
    icon: redIcon,
    title: "Salisbury MD, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Salisbury MD, USA</city><production>Śriyaḥ</production><location>Holloway Hall Auditorium, University of Salisbury<date>1-2 MAR 2011</date></location><location>Holloway Hall Auditorium, University of Salisbury<date>26-27 OCT 2016</date></location><production>Saṃhāra</production><location>Holloway Hall Auditorium, University of Salisbury<date>3 APR 2013</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Salisbury MD, USA
  L.marker([ 43.68402, -79.759046 ], {
    icon: redIcon,
    title: "Brampton ON, Canada",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Brampton ON, Canada</city><production>Śriyaḥ</production><location>Rose Theatre Brampton<date>18 MAR 2011</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Brampton ON, Canada
  L.marker([ 43.873987, -79.259867 ], {
    icon: redIcon,
    title: "Markham ON, Canada",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Markham ON, Canada</city><production>Śriyaḥ</production><location>Markham Theatre, Markham<date>23-24 MAR 2011</date></location><location>Flato Markham Theatre, Markham<date>18 APR 2018</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Markham ON, Canada
  L.marker([ 33.748547, -84.391502 ], {
    icon: redIcon,
    title: "Atlanta GA, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Atlanta GA, USA</city><production>Śriyaḥ</production><location>Ferst Center for the Arts, Georgia Tech<date>27 MAR 2011</date></location><production>Āhuti</production><location>Ferst Center for the Arts, Georgia Tech<date>29 MAR 2024</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Atlanta GA, USA
  L.marker([ 34.14955, -118.141452 ], {
    icon: redIcon,
    title: "Pasadena CA, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Pasadena CA, USA</city><production>Śriyaḥ</production><location>Beckman Auditorium, Caltech<date>2 APR 2011</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Pasadena CA, USA
  L.marker([ 39.190363, -96.549656 ], {
    icon: redIcon,
    title: "Manhattan KS, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Manhattan KS, USA</city><production>Śriyaḥ</production><location>McCain Auditorium, Kansas State University<date>14 APR 2011</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Manhattan KS, USA
  L.marker([ 33.448204, -112.072585 ], {
    icon: redIcon,
    title: "Phoenix AZ, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Phoenix AZ, USA</city><production>Śriyaḥ</production><location>Scottsdale Center for the Performing Arts<date>16 APR 2011</date></location><production>Saṃhāra</production><location>Scottsdale Center for the Performing Arts<date>8 MAR 2013</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Phoenix AZ, USA
  L.marker([ 38.811309, -89.955724 ], {
    icon: redIcon,
    title: "Edwardsville IL, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Edwardsville IL, USA</city><production>Saṃhāra</production><location>The Wildey Theatre<date>16 MAR 2012</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Edwardsville IL, USA
  L.marker([ 30.22126, -92.018773 ], {
    icon: redIcon,
    title: "Lafayette LA, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Lafayette LA, USA</city><production>Saṃhāra</production><location>Heymann Center<date>3 APR 2012</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Lafayette LA, USA
  L.marker([ 19.043671, -98.198727 ], {
    icon: redIcon,
    title: "Puebla Mexico",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Puebla Mexico</city><production>Saṃhāra</production><location>Festival Internacional de Puebla<date>13-14 APR 2012</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Puebla Mexico
  L.marker([ 20.750203, -155.986729 ], {
    icon: redIcon,
    title: "Hana HI, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Hana HI, USA</city><production>Saṃhāra</production><location>Hana Community Center<date>19 FEB 2013</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Hana HI, USA
  L.marker([ 40.966311, -76.884932 ], {
    icon: redIcon,
    title: "Lewisburg PA, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Lewisburg PA, USA</city><production>Saṃhāra</production><location>Weis Center for the Performing Arts, Bucknell University<date>1 MAR 2013</date></location><location>Weis Center for the Performing Arts, Bucknell University<date>18 OCT 2018</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Lewisburg PA, USA
  L.marker([ 40.233677, -111.663926 ], {
    icon: redIcon,
    title: "Provo UT, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Provo UT, USA</city><production>Saṃhāra</production><location>Harris Fine Arts Center, Brigham Young University<date>14 MAR 2013</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Provo UT, USA
  L.marker([ 35.084248, -106.649241 ], {
    icon: redIcon,
    title: "Albuquerque NM, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Albuquerque NM, USA</city><production>Saṃhāra</production><location>Popejoy Hall, University of New Mexico<date>22 MAR 2013</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Albuquerque NM, USA
  L.marker([ 45.509062, -73.553363 ], {
    icon: redIcon,
    title: "Montreal Quebec, Canada",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Montreal Quebec, Canada</city><production>Saṃyoga</production><location>Salle Gesu Theater<date>26 APR 2014</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Montreal Quebec, Canada
  L.marker([ 43.651893, -79.381713 ], {
    icon: redIcon,
    title: "Toronto ON, Canada",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Toronto ON, Canada</city><production>Vibhakta</production><location>Fall for Dance North, Sony Centre<date>29 SEP 2015</date></location><production>Lalita Lavanga.Digital</production><location>Fall for Dance North Online<date>13 OCT 2021</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Toronto ON, Canada
  L.marker([ 41.308252, -72.924161 ], {
    icon: redIcon,
    title: "New Haven CT, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>New Haven CT, USA</city><production>Protima Bedi & Party</production><location>Yale University<date>OCT 1993</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // New Haven CT, USA
  L.marker([ 41.544654, -72.651713 ], {
    icon: redIcon,
    title: "Middletown CT, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Middletown CT, USA</city><production>Śriyaḥ</production><location>Crowell Concert Hall, Wesleyan University<date>20 OCT 2016</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Middletown CT, USA
  L.marker([ 38.291962, -122.458003 ], {
    icon: redIcon,
    title: "Sonoma CA, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Sonoma CA, USA</city><production>Śriyaḥ</production><location>Weill Hall at Green Music Center, Sonoma State University<date>27 APR 2018</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Sonoma CA, USA
  L.marker([ 40.731507, -74.174388 ], {
    icon: redIcon,
    title: "Newark NJ, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Newark NJ, USA</city><production>Śriyaḥ</production><location>Jim Wise Theatre, New Jersey Institute of Technology<date>24-25 APR 2018</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Newark NJ, USA
  L.marker([ 35.996948, -78.899023 ], {
    icon: redIcon,
    title: "Durham NC, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Durham NC, USA</city><production>Śrī: In Search of the Goddess</production><location>American Dance Festival, Reynolds Theater, Duke University<date>2 JUL 2003</date></location><production>Songs of Love and Longing</production><location>Reynolds Theater, Duke University<date>27 JAN 2015</date></location><production>Saṃhāra</production><location>RJ Reynolds Industries Theater, Duke University<date>22-23 SEP 2018</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Durham NC, USA
  L.marker([ 42.881978, -71.324171 ], {
    icon: redIcon,
    title: "Derry NH, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Derry NH, USA</city><production>Saṃhāra</production><location>Stockbridge Theater, Pinkerton Academy<date>10 OCT 2018</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Derry NH, USA
  L.marker([ 42.375805, -72.519871 ], {
    icon: redIcon,
    title: "Amherst MA, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Amherst MA, USA</city><production>Saṃhāra</production><location>UMASS Fine Arts Center Concert Hall<date>13 OCT 2018</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Amherst MA, USA
  L.marker([ 35.838393, -90.710505 ], {
    icon: redIcon,
    title: "Jonesboro AR, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Jonesboro AR, USA</city><production>Āhuti</production><location>Fowler Center, Arkansas State University<date>1 OCT 2019</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Jonesboro AR, USA
  L.marker([ 33.957412, -83.376798 ], {
    icon: redIcon,
    title: "Athens GA, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Athens GA, USA</city><production>Āhuti</production><location>Hugh Hodgson Concert Hall, University of Georgia<date>6 OCT 2019</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Athens GA, USA
  L.marker([ 27.336483, -82.538602 ], {
    icon: redIcon,
    title: "Sarasota FL, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Sarasota FL, USA</city><production>Āhuti</production><location>Historic Asolo Theater, Ringling Museum of Art<date>11-12 OCT 2019</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Sarasota FL, USA
  L.marker([ 34.052238, -118.243344 ], {
    icon: redIcon,
    title: "Los Angeles CA, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Los Angeles CA, USA</city><production>Āhuti</production><location>The Luckman Theatre, Cal State University<date>19 OCT 2019</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Los Angeles CA, USA
  L.marker([ 45.264633, -111.253265 ], {
    icon: redIcon,
    title: "Big Sky MT, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Big Sky MT, USA</city><production>Śriyaḥ</production><location>Warren Miller Performing Arts Center<date>14 FEB 2015</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Big Sky MT, USA
  L.marker([ 42.422372, -76.461572 ], {
    icon: redIcon,
    title: "Ithaca NY, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Ithaca NY, USA</city><production>Songs of Love and Longing</production><location>Barnes Hall, Cornell University<date>4 FEB 2015</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Ithaca NY, USA
  L.marker([ 37.334807, -121.888128 ], {
    icon: redIcon,
    title: "San Jose CA, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>San Jose CA, USA</city><production>Saṃyoga</production><location>California Theater<date>11 MAY 2014</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // San Jose CA, USA
  L.marker([ 39.9574011, -105.1303553 ], {
    icon: redIcon,
    title: "North Glenn CO, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>North Glenn CO, USA</city><production>Āhuti</production><location>Parsons Theater<date>8 OCT 2022</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // North Glenn CO, USA
  L.marker([ 33.8281579, -118.4024813 ], {
    icon: redIcon,
    title: "Redondo Beach CA, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Redondo Beach CA, USA</city><production>Āhuti</production><location>Redondo Beach Performing Arts Center<date>15 OCT 2022</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Redondo Beach CA, USA
  L.marker([ 37.2304444, -80.4706545 ], {
    icon: redIcon,
    title: "Blacksburg VA, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Blacksburg VA, USA</city><production>Āhuti</production><location>Moss Arts Center Virginia Tech<date>12 NOV 2022</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Blacksburg VA, USA
  L.marker([ 43.3923763, -88.4038979 ], {
    icon: redIcon,
    title: "Milwaukee WI, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Milwaukee WI, USA</city><production>Āhuti</production><location>Marcus Performing Arts Center<date>28 APR 2023</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Milwaukee WI, USA
  L.marker([ 32.8724942, -117.3309734 ], {
    icon: redIcon,
    title: "La Jolla CA, USA",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>La Jolla CA, USA</city><production>Āhuti</production><location>The Baker Baum Concert Hall<date>20-21 MAR 2024</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // La Jolla CA, USA


  // +++++++++++++++++  OTHERS  +++++++++++++++++
  L.marker([ -26.17, 28.03 ], {
    icon: redIcon,
    title: "Johannesburg, South Africa",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Johannesburg, South Africa</city><production>Ansh</production><location>The Dance Factory<date>19-20 SEP 2009</date></location><production>Śriyaḥ</production><location>The Dance Factory<date>18-19 SEP 2012</date></location><location>WITS Theatre<date>10-11 SEP 2015</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Johannesburg
  L.marker([ -29.865, 30.98 ], {
    icon: redIcon,
    title: "Durban, South Africa",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Durban, South Africa</city><production>Ansh</production><location>The Playhouse Company<date>17 SEP 2009</date></location><production>Śriyaḥ</production><location>The Playhouse Company<date>21-22 SEP 2012</date></location><location>The Playhouse Company<date>13-14 SEP 2015</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Durban
  L.marker([ 30.05, 31.25 ], {
    icon: redIcon,
    title: "Cairo, Egypt",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Cairo, Egypt</city><production>Śriyaḥ</production><location>Cairo Opera House<date>9 MAY 2013</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Cairo
  L.marker([ 1.293, 103.8558 ], {
    icon: redIcon,
    title: "Singapore",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Singapore</city><production>Surupa & Bijayini</production><location>Esplanade Theatre<date>13-14 NOV 2004</date></location><production>Saṃhāra</production><location>Esplanade Theatre<date>28-29 NOV 2012</date></location><production>Songs of Love and Longing</production><location>Esplanade Theatre<date>10 APR 2016</date></location><production>Vinati: Songs from the Gita Govinda</production><location>Esplanade Theatre<date>11 SEP 2022</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Singapore
  L.marker([ -31.955, 115.84 ], {
    icon: redIcon,
    title: "Perth, Australia",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Perth, Australia</city><production>Śriyaḥ</production><location>Studio Underground, State Theatre of Western Australia<date>27-28 SEP 2016</date></location><production>Bijayini Solo</production><location>Heath Ledger Hall, State Theatre of Western Australia<date>10 OCT 2017</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Perth
  L.marker([ -35.283, 149.129 ], {
    icon: redIcon,
    title: "Canberra, Australia",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Canberra, Australia</city><production>Śriyaḥ</production><location>The Playhouse, Canberra Theatre Centre<date>25 SEP 2016</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Canberra
  L.marker([ -33.92, 151.1852 ], {
    icon: redIcon,
    title: "Sydney, Australia",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Sydney, Australia</city><production>Śriyaḥ</production><location>Sydney Opera House<date>13-14 SEP 2016</date></location><production>Festival Gala</production><location>Sydney Opera House<date>18 SEP 2016</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Sydney
  L.marker([ 6.932, 79.8578 ], {
    icon: redIcon,
    title: "Colombo, Sri Lanka",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Colombo, Sri Lanka</city><production>Pratimā: Reflection</production><location>Bishops Auditorium<date>17 JAN 2009</date></location><production>Ansh</production><location>Bishops Auditorium<date>18 JAN 2009</date></location><production>Saṃhāra</production><location>Lionel Wendt Theatre<date>11-13 MAY 2012</date></location><location>Lionel Wendt Theatre<date>5-6 JUN 2017</date></location><production>Śriyaḥ</production><location>Bishops Auditorium<date>14 NOV 2014</date></location><production>Songs of Love and Longing</production><location>Bishops Auditorium<date>15 NOV 2014</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Colombo, Sri Lanka
  L.marker([ 32.08, 34.77 ], {
    icon: redIcon,
    title: "Tel Aviv, Israel",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Tel Aviv, Israel</city><production>Śriyaḥ</production><location>Suzanne Dellal Center<date>5-6 MAY 2011</date></location><location>Suzanne Dellal Center<date>13-14 MAY 2013</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Tel Aviv
  L.marker([ 25.268352, 55.296196 ], {
    icon: redIcon,
    title: "Dubai, UAE",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Dubai, UAE</city><production>Traditional Repertoire (Re-staged)</production><location><date>20 SEP 1995</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Dubai, UAE
  L.marker([ 24.5239, 54.4346 ], {
    icon: redIcon,
    title: "Abu Dhabi, UAE",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Abu Dhabi, UAE</city><production>Āhuti.Digital</production><location>NYU Abu Dhabi Online<date>17 FEB 2021</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Abu Dhabi, UAE
  L.marker([ 35.680071, 139.768522 ], {
    icon: redIcon,
    title: "Tokyo, Japan",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Tokyo, Japan</city><production>Surupa & Bijayini Odissi Repertoire</production><location><date>24 MAY 2002</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Tokyo, Japan
  L.marker([ 26.223504, 50.582244 ], {
    icon: redIcon,
    title: "Manama, Bahrain",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Manama, Bahrain</city><production>Ansh</production><location>Soorya Festival<date>23 SEP 2005</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Manama, Bahrain
  L.marker([ 3.157098, 101.700953 ], {
    icon: redIcon,
    title: "Kuala Lumpur, Malaysia",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Kuala Lumpur, Malaysia</city><production>Surupa & Bijayini</production><location>Odissi International Festival, Malaysian Tourist Centre<date>7-8 JUN 2008</date></location><production>Pratimā: Reflection</production><location>Odissi International Festival, KLPAC<date>13-14 JUN 2008</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Kuala Lumpur, Malaysia
  L.marker([ 31.199004, 29.894379 ], {
    icon: redIcon,
    title: "Alexandrina, Egypt",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Alexandrina, Egypt</city><production>Śriyaḥ</production><location>Great Hall, Bibliotheca<date>6 MAY 2013</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Alexandrina, Egypt
  L.marker([ 31.895253, 34.810562 ], {
    icon: redIcon,
    title: "Rehovot, Israel",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Rehovot, Israel</city><production>Śriyaḥ</production><location>Weizmann Institute<date>20 MAY 2013</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Rehovot, Israel
  L.marker([ 22.264412, 114.167061 ], {
    icon: redIcon,
    title: "Hong Kong, HK",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Hong Kong, HK</city><production>Bijayini Solo</production><location>India by the Bay, Asia Society<date>28 FEB 2016</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Hong Kong, HK
  L.marker([ -27.468968, 153.023499 ], {
    icon: redIcon,
    title: "Brisbane, Australia",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Brisbane, Australia</city><production>Śriyaḥ</production><location>Cremorne Theatre, QPAC<date>1 OCT 2016</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Brisbane, Australia
  L.marker([ -37.814255, 144.963146 ], {
    icon: redIcon,
    title: "Melbourne, Australia",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Melbourne, Australia</city><production>Bijayini Solo</production><location>Drama Theatre, Monash University<date>8 OCT 2017</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Melbourne, Australia
  L.marker([ 38.415342, 27.144474 ], {
    icon: redIcon,
    title: "Izmir, Turkey",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Izmir, Turkey</city><production>Śriyaḥ</production><location>India By The Bosphorus, Culture Park<date>27 APR 2019</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Izmir, Turkey
  L.marker([ 39.927232, 32.851977 ], {
    icon: redIcon,
    title: "Ankara, Turkey",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Ankara, Turkey</city><production>Śriyaḥ</production><location>India By The Bosphorus, Leyla Gencer Hall<date>26 APR 2019</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Ankara, Turkey
  L.marker([ 41.017058, 28.985568 ], {
    icon: redIcon,
    title: "Istanbul, Turkey",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Istanbul, Turkey</city><production>Śriyaḥ</production><location>India By The Bosphorus, Suleyman Seba Hall<date>24 APR 2019</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Istanbul, Turkey
  L.marker([ 22.194401, 113.536499 ], {
    icon: redIcon,
    title: "Macau, Macau",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Macau, Macau</city><production>Sridevi</production><location><date>17 SEP 2010</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Macau, Macau
  L.marker([ 9.6699569, 80.0078271 ], {
    icon: redIcon,
    title: "Jaffna, Sri Lanka",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Jaffna, Sri Lanka</city><production>Āhuti</production><location>Jaffna Cultural Center<date>21 APR 2024</date></location><location>Bishops College Auditorium<date>25-26 APR 2024</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Jaffna, Sri Lanka

  // +++++++++++++++++  EUROPE  +++++++++++++++++
  L.marker([ 55.9483, -3.2191 ], {
    icon: redIcon,
    title: "Edinburgh, UK",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Edinburgh, UK</city><production>Bijayini Solo</production><location>Edinburgh Festival Fringe, Dance Base<date>7-10, 12-16 AUG 2003</date></location><production>Surupa & Bijayini</production><location>Edinburgh Festival Fringe, Dance Base<date>13-22 AUG 2004</date></location><production>Śriyaḥ</production><location>Edinburgh International Festival, King’s Theatre<date>26-29 AUG 2011</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Edinburgh, UK
  L.marker([ 48.8667, 2.3333 ], {
    icon: redIcon,
    title: "Paris, France",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Paris, France</city><production>Saṃyoga</production><location>Festival d’Île de France<date>13 SEP 2014</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Paris, France
  L.marker([ 51.439528, 5.47806 ], {
    icon: redIcon,
    title: "Eindhoven, The Netherlands",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Eindhoven, The Netherlands</city><production>Surupa Solo</production><location><date>MAR 1995</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Eindhoven, The Netherlands
  L.marker([ 56.446913, 9.405935 ], {
    icon: redIcon,
    title: "Viborg, Denmark",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Viborg, Denmark</city><production>Traditional Repertoire (Re-staged)</production><location><date>NOV 1997</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Viborg, Denmark
  L.marker([ 56.169453, 9.549514 ], {
    icon: redIcon,
    title: "Silkeborg, Denmark",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Silkeborg, Denmark</city><production>Traditional Repertoire (Re-staged)</production><location><date>NOV 1997</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Silkeborg, Denmark
  L.marker([ 38.713057, -9.138006 ], {
    icon: redIcon,
    title: "Lisbon, Portugal",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Lisbon, Portugal</city><production>Traditional Repertoire (Re-staged)</production><location>Teatro Nacional D. Maria II<date>5-6 JUN 1998</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Lisbon, Portugal
  L.marker([ 52.45363, 6.41362 ], {
    icon: redIcon,
    title: "Lommel, The Netherlands",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Lommel, The Netherlands</city><production>Bijayini Solo</production><location>De Adelberg<date>23 FEB 2003</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Lommel, The Netherlands
  L.marker([ 52.079984, 4.311346 ], {
    icon: redIcon,
    title: "Den Haag, The Netherlands",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Den Haag, The Netherlands</city><production>Bijayini Solo</production><location>Theater Zwembad De Regentes<date>25 FEB 2003</date></location><location>Korzo Main Stage<date>20 SEP 2006</date></location><production>Pratimā: Reflection</production><location>Korzo Main Stage<date>23 NOV 2008</date></location><production>Vinati: Songs from the Gita Govinda</production><location>Korzo Main Stage<date>20 MAY 2022</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Den Haag, The Netherlands
  L.marker([ 53.219065, 6.568008 ], {
    icon: redIcon,
    title: "Groningen, The Netherlands",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Groningen, The Netherlands</city><production>Bijayini Solo</production><location>De Oosterpoort<date>26 FEB 2003</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Groningen, The Netherlands
  L.marker([ 51.922896, 4.463173 ], {
    icon: redIcon,
    title: "Rotterdam, The Netherlands",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Rotterdam, The Netherlands</city><production>Bijayini Solo</production><location>De Doelen<date>27 FEB 2003</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Rotterdam, The Netherlands
  L.marker([ 51.22111, 4.399708 ], {
    icon: redIcon,
    title: "Antwerpen, Belgium",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Antwerpen, Belgium</city><production>Bijayini Solo</production><location>Wereldculturecentrum Zuiderpershuis<date>28 FEB 2003</date></location><location>Wereldculturecentrum Zuiderpershuis<date>21 SEP 2006</date></location><production>Surupa & Bijayini</production><location>Wereldculturecentrum Zuiderpershuis<date>26 NOV 2010</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Antwerpen, Belgium
  L.marker([ 52.095942, 5.110414 ], {
    icon: redIcon,
    title: "Utrecht, The Netherlands",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Utrecht, The Netherlands</city><production>Bijayini Solo</production><location>Rasa Wereldculturecentrum<date>1 MAR 2003</date></location><location>Rasa Wereldculturecentrum<date>22 SEP 2006</date></location><production>Surupa & Bijayini</production><location>Rasa Wereldculturecentrum<date>28 NOV 2010</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Utrecht, The Netherlands
  L.marker([ 52.371009, 4.900112 ], {
    icon: redIcon,
    title: "Amsterdam, The Netherlands",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Amsterdam, The Netherlands</city><production>Bijayini Solo</production><location>KIT Tropentheater<date>2 MAR 2003</date></location><location>KIT Tropentheater<date>23 SEP 2006</date></location><production>Pratimā: Reflection</production><location>The Great Theatre<date>21 NOV 2008</date></location><production>Surupa & Bijayini</production><location>Tropentheater<date>27 NOV 2010</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Amsterdam, The Netherlands
  L.marker([ 51.547516, 3.666088 ], {
    icon: redIcon,
    title: "Veere, The Netherlands",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Veere, The Netherlands</city><production>Bijayini Solo</production><location>Grote Kerk<date>24 SEP 2006</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Veere, The Netherlands
  L.marker([ 51.507276, -0.12766 ], {
    icon: redIcon,
    title: "London, UK",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>London, UK</city><production>Bijayini Solo</production><location>Nehru Center<date>20 AUG 2003</date></location><production>Saṃyoga</production><location>Queen Elizabeth Hall, Southbank Centre<date>19 MAY 2015</date></location><production>Saṃhāra</production><location>Royal Festival Hall, Southbank Centre<date>26 MAY 2017</date></location><production>Śriyaḥ</production><location>The Science Museum<date>24 & 26 NOV 2017</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // London, UK
  L.marker([ 45.466797, 9.190498 ], {
    icon: redIcon,
    title: "Milan, Italy",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Milan, Italy</city><production>Pratimā: Reflection</production><location>Teatro Elfo Puccini<date>17-18 NOV 2008</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Milan, Italy
  L.marker([ 41.652133, -4.728562 ], {
    icon: redIcon,
    title: "Valladolid, Spain",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Valladolid, Spain</city><production>Pratimā: Reflection</production><location>Miguel Delibes Cultural Center<date>25-27 NOV 2008</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Valladolid, Spain
  L.marker([ 57.706407, 11.968629 ], {
    icon: redIcon,
    title: "Gothenburg, Sweden",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Gothenburg, Sweden</city><production>Śriyaḥ</production><location>Pusterviks Teartern<date>11 NOV 2010</date><emph>Premiere</emph></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Gothenburg, Sweden
  L.marker([ 59.330761, 18.06131 ], {
    icon: redIcon,
    title: "Stockholm, Sweden",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Stockholm, Sweden</city><production>Śriyaḥ</production><location>Sodra Teatern<date>13 NOV 2010</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Stockholm, Sweden
  L.marker([ 55.861147, -4.249989 ], {
    icon: redIcon,
    title: "Glasgow, UK",
    riseOnHover: true,
  })
    .addTo(mobmap)
    .bindPopup(
      "<city>Glasgow, UK</city><production>Saṃyoga</production><location>Alchemy Festival, City Halls<date>23 MAY 2015</date></location>",
      { maxHeight: 200, maxWidth: 300 }
    ); // Glasgow, UK
});
