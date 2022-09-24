<?php
include("security.php");


?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Title -->
    <title>CryptoX</title>
    <!-- Favicon -->
    <link rel="shortcut icon" href="img/fevicon.ico" type="image/x-icon">
    <!-- Fonts Comfortaa -->
    <link href="https://fonts.googleapis.com/css?family=Comfortaa:300,400,500,600,700&display=swap" rel="stylesheet">
    <!-- Dependencies - Bootstrap, Fontawesome, animate.css, Flag-Icon, flipclock, Slick, themify-icons, themify -->
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/all.min.css">
    <link rel="stylesheet" href="css/animate.css">
    <link rel="stylesheet" href="css/flag-icon.css">
    <link rel="stylesheet" href="css/flipclock.css">
    <link rel="stylesheet" href="css/slick.css">
    <link rel="stylesheet" href="css/themify-icons.css">
    <link rel="stylesheet" href="themify/css/themify.css">
    <!-- Stylesheets -->
    <link rel="stylesheet" href="style.css">
    <!-- Responsive Stylesheets -->
    <link rel="stylesheet" href="css/responsive.css">
</head>
<body>
    <!-- Header Sections -->
    <header class="header_section">
        <div class="header_wraper">
            <nav>
                <div class="container">
                    <div class="row">
                        <div class="col-md-3">
                            <!-- Logo Area -->
                            <div class="logo_area">
                                <!-- Logo Image -->
                                <div class="logo_img">
                                    <img src="img/logo.png" alt="logo">
                                </div>
                                <!-- Logo Text -->
                                <div class="logo_text">
                                    <span>crypto</span> ico
                                </div>
                            </div>
                        </div>
                        <!-- Navigation -->
                        <div class="col-md-9 navigation">
                            <!-- Navlinks -->
                            <div class="nav_links">
                                <ul>
                                    <li class="wow fadeInUp" data-wow-delay="1.1s"><a src="index.js">Live Crypto</a></li>
                                    <li class="wow fadeInDown data-wow-delay="1.2s"><a href="crypto.html">Markets</a></li>
                                    <li class="wow fadeInUp" data-wow-delay="1.3s"><a href="">Trade</a></li>
                                    <li class="wow fadeInLeft" data-wow-delay="1.5"><a href="crypto2.html">Cards</a></li>
                                    <li class="wow fadeInDown" data-wow-delay="1.7s"><a href=""><span class="flag-icon flag-icon-us"></span>
                                    </li>
                                </ul>
                            </div>
                            <!-- Signin Button -->
                            <div class="sign_in_btn wow fadeInDown" data-wow-delay="1.8s">
                                <a href="loginpage.html">Sign in</a>
                            </div>
                            <form action="logout.php" method="POST"><div class="sign_out_btn wow fadeInDown" data-wow-delay="1.8s">
                                <input type="submit" name="logout_btn" value="logout">
                            </div></form>
                            <div class="mobile_bar">
                                <i class="fas fa-bars"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </header>
    <!-- Home Section -->
    <section class="home_section" data-midnight="white">
        <div class="container">
            <div class="row">
                <!-- Home Left Side -->
                <div class="col-md-6 col-sm-12">
                    <div class="home_content">
                        <!-- Home Content -->
                        <h2 class="wow fadeInUp" data-wow-delay="1.5s">Join the future of algorithmic <br>
                        crypto trading strategies</h2>
                        <h3 class="wow fadeInUp" data-wow-delay="1.7s">$150B Target cap <span>$99B Raised</span></h3>
                        <div class="progress_top wow fadeInUp" data-wow-delay="1.9s">
                            <ul>
                                <li>pre-sale</li>
                                <li>soft cap</li>
                                <li>bonus</li>
                            </ul>
                        </div>
                        <div class="progress progress_bar wow fadeInUp" data-wow-delay="1.9s">
                            <div class="progress-bar w-75" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div class="progress_bottom wow fadeInUp" data-wow-delay="1.9s">
                            <div class="progress_inof">65% target raised</div>
                            <div class="progress_inofr">1 ETH = $1000 = 3177.38 CIC</div>
                        </div>
                        <!-- Home clock area -->
                        <div class="clock_area wow fadeInUp" data-wow-delay="2.1s">
                            <div class="clock" style="margin:2em;"></div>
	                        <div class="message"></div>
                        </div>
                        <div class="purchase_btn wow fadeInUp" data-wow-delay="2.3s">
                            <a href="">purchase taken</a>
                        </div>
                        <div class="home_coin wow fadeInUp" data-wow-delay="2.3s">
                            <ul>
                                <li><a href=""><img src="img/icon-bitcoin.png" alt=""></a></li>
                                <li><a href=""><img src="img/icon-eth.png" alt=""></a></li>
                                <li><a href=""><img src="img/icon-visa.png" alt=""></a></li>
                                <li><a href=""><img src="img/icon-maestro.png" alt=""></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- Home Right Side -->
                <div class="col-md-4 offset-md-1 col-sm-12">
                    <div class="home_icon_bg wow zoomIn" data-wow-delay="2s">
                        <div class="home_icon_logo">
                            <div class="home_icon_ripo">
                                <!-- Ripple Web -->
                                <div id="rip"></div>
                                <div id="rip1"></div>
                                <div id="rip2"></div>
                                <img class="crypto_icon_img_3" src="img/logo-big.png" alt="logo">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Home background assets -->
        <div class="bg_shap">
            <img src="img/banner-shape.png" alt="">
        </div>
        <!-- Home background ripple -->
        <div class="left_bottom_ripple_ani">
            <div class="ripple1"></div>
            <div class="ripple2"></div>
        </div>
        <!-- Home background ripple -->
        <div class="right_top_ripple_ani">
            <div class="ripple3"></div>
            <div class="ripple4"></div>
        </div>
    </section>
    <!-- Exchange Section -->
    <section class="exchange_section">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <!-- Exchange Container -->
                    <div class="exchange_coontent">
                        <!-- Single exchange -->
                        <div class="single_exchange wow fadeInUp" data-wow-delay="0.2s">
                            <img src="img/icon-arrow.png" alt="icon-arrow">
                            <p>Exchange listing <br>
                                to be announced</p>
                        </div>
                        <!-- Single exchange -->
                        <div class="single_exchange exchange_border wow fadeInUp" data-wow-delay="0.3s">
                            <h2>4.3/5</h2>
                            <img src="img/ico-track.png" alt="icon-track">
                        </div>
                        <!-- Single exchange -->
                        <div class="single_exchange exchange_border wow fadeInUp" data-wow-delay="0.4s">
                            <h2>4.8/5</h2>
                            <img src="img/ico-bench.png" alt="icon-bench">
                        </div>
                        <!-- Single exchange -->
                        <div class="single_exchange exchange_border wow fadeInUp" data-wow-delay="0.5s">
                            <h2>3.9/5</h2>
                            <img src="img/ico-ranker.png" alt="icon ranker">
                        </div>
                        <!-- Single exchange -->
                        <div class="single_exchange exchange_border wow fadeInUp" data-wow-delay="0.6s">
                            <h2>4.1/5</h2>
                            <img src="img/ico-bazaar.png" alt="icon bazzar">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- About Section -->
    <section class="about_section">
        <div class="container">
            <div class="row">
                <div class="col-md-12">

                    

                     <!-- TradingView Widget BEGIN -->
<div class="tradingview-widget-container">
    <div class="tradingview-widget-container__widget"></div>
    <div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/markets/" rel="noopener" target="_blank"><span class="blue-text">Markets</span></a> by CryptoX</div>
    <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js" async>
    {
    "symbols": [
      {
        "description": "",
        "proName": "BINANCE:ETHUSD"
      },
      {
        "description": "",
        "proName": "BINANCE:SOLUSDT"
      },
      {
        "description": "",
        "proName": "BINANCE:BNBUSDT"
      },
      {
        "description": "",
        "proName": "BINANCE:AVAXUSDT"
      },
      {
        "description": "",
        "proName": "BINANCE:MATICUSDT"
      },
      {
        "description": "",
        "proName": "BINANCE:NEARUSDT"
      },
      {
        "description": "",
        "proName": "BINANCE:SHIBUSDT"
      },
      {
        "description": "",
        "proName": "BINANCE:DOGEUSDT"
      },
      {
        "description": "",
        "proName": "BINANCE:BTCUSD"
      },
      {
        "description": "",
        "proName": "BINANCE:ATOMUSDT"
      }
    ],
    "showSymbolLogo": true,
    "colorTheme": "dark",
    "isTransparent": false,
    "displayMode": "regular",
    "locale": "in"
  }
    </script>
  </div>
  <!-- TradingView Widget END -->

                    <!-- About Section Heading -->
                    <div class="crypto_heading">
                        <h6 class="wow fadeInUp" data-wow-delay="0.2s">What is Crypto ICO</h6>
                        <h2 class="wow fadeInUp" data-wow-delay="0.3s">About Crypto ICO</h2>
                        <!-- About Section Divider -->
                        <div class="separator wow fadeInUp" data-wow-delay="0.3s">
                            <span class="sepa_learge"></span>
                            <span class="sepa_medium"></span>
                            <span class="sepa_small"></span>
                        </div>
                        <!-- About Section Header descriptions -->
                        <p class="wow fadeInUp" data-wow-delay="0.4s">Crypto ICO aims to disrupt the cryptotrading industry by lowering the barrier
                            to creating algorithmic trading models.</p>
                    </div>
                </div>
            </div>
            <!-- About Section Container -->
            <div class="row">
                <!-- Single About -->
                <div class="col-md-6">
                    <div class="about_content wow fadeInLeft" data-wow-delay="0.5ss">
                        <h5>We built a platform for <br>
                        The crypto trading Industry</h5>
                        <h6>Cryptocurrency exchanges or digital currency exchanges (DCE) are businesses that allow customers to trade cryptocurrencies or digital currencies for other assets.</h6>
                        <p>Cryptocurrency exchanges or digital currency exchanges (DCE) are businesses that allow customers to trade cryptocurrencies or digital currencies for other assets</p>
                        <p>Creators of digital currencies are often independent of the DCEs that trade the currency.[6] In one type of system, digital currency providers (DCP), are businesses that keep and administer accounts.</p>
                    </div>
                </div>
                <!-- Single About right -->
                <div class="col-md-6">
                    <div class="about_img wow fadeInRight" data-wow-delay="0.5s">
                        <!-- Single About image -->
                        <div class="abo_crypto_img">
                            <img src="img/what-is-crypto.png" alt="crypto">
                        </div>
                        <!-- Button trigger modal -->
                        <button type="button" class="btn btn_primary_cryto" data-toggle="modal"
                        data-video="https://www.youtube.com/embed/K-Vr2bSMU7o" data-target="#crypto_modal">
                            <i class="ti-control-play"></i>
                        </button>
                        <!-- Modal -->
                        <div class="modal fade" id="crypto_modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content">
                                <!-- Modal Close button -->
                                <button type="button" class="close video_crypto_close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                <!-- Modal Body -->
                                <div class="modal-body crypto_m_body">
                                    <div class="embed-responsive embed-responsive-16by9">
                                        <iframe id="video_cry_so" class="embed-responsive-item" src="" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <!-- Video Button Text -->
                        <div class="about_video_text">
                            how it works
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Solutions Sections -->
    <section class="solutions_section">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <!-- Solutions Sections Heading -->
                    <div class="crypto_heading">
                        <h6 class="wow fadeInUp" data-wow-delay="0.2s">solutions</h6>
                        <h3 class="wow fadeInUp" data-wow-delay="0.3s">Problems & Solutions</h3>
                        <!-- Solutions Sections Divider -->
                        <div class="separator wow fadeInUp" data-wow-delay="0.3s">
                            <span class="sepa_learge"></span>
                            <span class="sepa_medium"></span>
                            <span class="sepa_small"></span>
                        </div>
                        <!-- Solutions Sections Header descriptions -->
                        <p class="wow fadeInUp" data-wow-delay="0.4s">More than $40 million in assets were placed under restraint pending forfeiture, and more than 30
                        Liberty Reserve exchanger domain names were seized.</p>
                    </div>
                </div>
            </div>
            <!-- Solutions Sections Container -->
            <div class="probelem_sec">
                <div class="row">
                    <!-- Single Solutions Content -->
                    <div class="col-md-6">
                        <div class="solutions_content">
                            <h3 class="wow fadeInUp" data-wow-delay="0.2s">problems</h3>
                            <!-- Separator -->
                            <div class="separator wow fadeInUp" data-wow-delay="0.3s">
                                <span class="sepa_learge"></span>
                                <span class="sepa_medium"></span>
                                <span class="sepa_small"></span>
                            </div>
                            <p class="wow fadeInUp" data-wow-delay="0.5s">Different pieces of the new Internet are born as building blocks, but there’s no way for them to work together.</p>
                            <p class="wow fadeInUp" data-wow-delay="0.7s">Even interoperating new technologies with old centralised resources can prove useful in making the paradigm shift from Web 2 to Web 3 happen. Now we own our data, we can prove that we own what we have and have created it on different platforms, but how do we put it together into a whole new cohesive framework.</p>
                        </div>
                    </div>
                    <!-- Single Solutions Image -->
                    <div class="col-md-6">
                        <div class="solutions_img wow fadeInUp" data-wow-delay="0.6s">
                            <img src="img/problems-graphic.png" alt="problem">
                        </div>
                    </div>
                </div>
            </div>
            <!-- Solutions Sections Container -->
            <div class="solutions_sec">
                <div class="row">
                    <!-- Single Solutions Content -->
                    <div class="col-md-6">
                        <div class="solutions_img wow fadeInUp" data-wow-delay="0.6s">
                            <img src="img/solutions-graphic.png" alt="solutions">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="solutions_content">
                            <h3 class="wow fadeInUp" data-wow-delay="0.2s">solutions</h3>
                            <!-- Separator -->
                            <div class="separator wow fadeInUp" data-wow-delay="0.3s">
                                <span class="sepa_learge"></span>
                                <span class="sepa_medium"></span>
                                <span class="sepa_small"></span>
                            </div>
                            <p class="wow fadeInUp" data-wow-delay="0.5s">Decentralized cryptocurrency is produced by the entire cryptocurrency system collectively, at a rate which is defined when the system is created and which is publicly known.</p>
                            <p class="wow fadeInUp" data-wow-delay="0.7s">In centralized banking and economic systems such as the Federal Reserve System, corporate boards or governments control the supply of currency by printing units of fiat money or demanding additions to digital banking ledgers.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
                            
    <!-- Road Map Sections -->
    <section class="roadmap_section">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <!-- Road Map Sections Heading -->
                    <div class="crypto_heading">
                        <h6 class="wow fadeInUp" data-wow-delay="0.2s">Roadmap</h6>
                        <h2 class="wow fadeInUp" data-wow-delay="0.3s">Implementation Sheet</h2>
                        <!-- Road Map Sections Heading Divider -->
                        <div class="separator wow fadeInUp" data-wow-delay="0.3s">
                            <span class="sepa_learge"></span>
                            <span class="sepa_medium"></span>
                            <span class="sepa_small"></span>
                        </div>
                        <!-- Road Map Sections Heading Descriptions -->
                        <p class="wow fadeInUp" data-wow-delay="0.4s">This is a list of cryptocurrencies. The number of cryptocurrencies available over
                        the internet as of 7 January 2018 is over 1384 and growing.</p>
                    </div>
                </div>
            </div>
            <!-- Section Container -->
            <div class="row">
                <div class="col-md-12">
                    <div class="roadmap_slider wow fadeInUp" data-wow-delay="0.6s">
                        <!-- Single Roadmap -->
                        <div class="single_road_map single_raod_map_icon">
                            <h6>November 2017</h6>
                            <p>
                                Crypto Ico <br/>Platform idea
                            </p>
                        </div>
                        <!-- Single Roadmap -->
                        <div class="single_road_map single_raod_map_icon">
                            <h6>January 2018</h6>
                            <p>
                                Technical & strategy <br/>devlopment
                            </p>
                        </div>
                        <!-- Single Roadmap -->
                        <div class="single_road_map_middle single_roade_map_speaaicl">
                            <div class="map_middle_content">
                                <div class="map_middle_info">
                                    <h6>May 2018</h6>
                                    <p>Ico Release</p>
                                </div>
                                <div class="map_midd_live">
                                    <p>live now</p>
                                </div>
                            </div>
                        </div>
                        <!-- Single Roadmap -->
                        <div class="single_road_map single_roade_map_speaaicl">
                            <h6>August 2018</h6>
                            <p>
                                Beta version of <br/>Crypto Ico 
                            </p>
                        </div>
                        <!-- Single Roadmap -->
                        <div class="single_road_map single_roade_map_speaaicl">
                            <h6>November 2018</h6>
                            <p>
                                Software development kit <br>for integrations
                            </p>
                        </div>
                        <!-- Single Roadmap -->
                        <div class="single_road_map single_roade_map_speaaicl">
                            <h6>December 2018</h6>
                            <p>
                                Mobile apps for <br/>iOS & Android
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Distribution Sections -->
    <section class="distribution_section">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <!-- Distribution Sections Header -->
                    <div class="crypto_heading">
                        <h6 class="wow fadeInUp" data-wow-delay="0.2s">Token Distribution</h6>
                        <h2 class="wow fadeInUp" data-wow-delay="0.3s">Token Sale Stats</h2>
                        <!-- Distribution Sections Divider -->
                        <div class="separator wow fadeInUp" data-wow-delay="0.3s">
                            <span class="sepa_learge"></span>
                            <span class="sepa_medium"></span>
                            <span class="sepa_small"></span>
                        </div>
                        <!-- Distribution Sections Header Descriptions -->
                        <p class="wow fadeInUp" data-wow-delay="0.4s">The ICO usually takes place before the project is completed, and helps fund the expenses
                        undertaken by the founding team until launch. For some of the larger projects.</p>
                    </div>
                </div>
            </div>
            <!-- Section Container -->
            <div class="row">
                <!-- Left side -->
                <div class="col-md-6">
                    <div class="distribution_img wow fadeInLeft" data-wow-delay="0.6s">
                        <img src="img/chart.png" alt="chart">
                    </div>
                </div>
                <!-- Right side -->
                <div class="col-md-5 offset-md-1">
                    <div class="distribution_content wow fadeInRight" data-wow-delay="0.6s">
                        <h5>Details</h5>
                        <p>
                            To calculate the number of tokens you’ll receive, you can follow the following formula. Note that this applies to public presale contributions only. If you participated through a syndicate or private presale,
                        </p>
                        <p>
                            To calculate the number of tokens you’ll receive, you can follow the following formula. Note that this applies to public presale contributions only. If you participated through a syndicate or private presale,
                        </p>
                        <p>
                            Symbol: <span>CIC</span>
                        </p>
                        <p>
                            Initial Value: <span>1 ETH = 3177.38 CIC</span>
                        </p>
                        <p>
                            Type: <span>ERC20</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Contact Section -->
    <section class="contact_section">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="crypto_heading">
                        <!-- Contact Section Heading -->
                        <h6 class="wow fadeInUp" data-wow-delay="0.2s">Contact</h6>
                        <h2 class="wow fadeInUp" data-wow-delay="0.3s">Contact Crypto ICO</h2>
                        <!-- Contact Section Diivder -->
                        <div class="separator wow fadeInUp" data-wow-delay="0.3s">
                            <span class="sepa_learge"></span>
                            <span class="sepa_medium"></span>
                            <span class="sepa_small"></span>
                        </div>
                        <!-- Contact Section Description -->
                        <p class="wow fadeInUp" data-wow-delay="0.4s">Have questions? We’re happy to help</p>
                    </div>
                </div>
            </div>
            <!-- Contact Section Container -->
            <div class="row">
                <div class="col-md-8 offset-md-2">
                    <!-- Contact Information -->
                    <div class="contact_information">
                        <div class="single_infor wow fadeInUp" data-wow-delay="0.5s">
                            <i class="ti-headphone"></i>
                            +919004630539
                        </div>
                        <div class="single_infor wow fadeInUp" data-wow-delay="0.6s">
                            <i class="ti-email"></i>
                            varunbhole@gmail.com
                        </div>
                        <div class="single_infor wow fadeInUp" data-wow-delay="0.7s">
                            <i class="ti-comment-alt"></i>
                            Join us on Telegram
                        </div>
                    </div>
                </div>
            </div>
            <!-- Contact Form -->
            <div class="row">
                <div class="col-md-8 offset-md-2">
                    <form>
                        <div class="form-group wow fadeInUp" data-wow-delay="0.8s">
                          <input type="email" class="form-control" aria-describedby="emailHelp" placeholder="Your Name">
                        </div>
                        <div class="form-group wow fadeInUp" data-wow-delay="0.9s">
                          <input type="email" class="form-control" placeholder="Your Mail">
                        </div>
                        <div class="form-group wow fadeInUp" data-wow-delay="1s">
                            <textarea class="form-control" rows="3" placeholder="Your Message"></textarea>
                        </div>
                        <div class="form_btn wow fadeInUp" data-wow-delay="1.1s">
                            <button type="submit" class="contact_btn">Send Message</button>
                        </div>
                      </form>
                </div>
            </div>
        </div>
    </section>
    <!-- Footer Section -->
    <footer class="footer_section" data-midnight="white">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="footer_content">
                        <h2 class="wow fadeInUp" data-wow-delay="0.2s">Stay updated with us</h2>
                        <!-- Footer Subscribe -->
                        <div class="footer_serch wow fadeInUp" data-wow-delay="0.3s">
                            <form action="">
                                <input class="footer_control" type="text" placeholder="Enter your email addrress">
                                <button type="button" class="footer_btn"><i class="ti-angle-right"></i></button>
                            </form>
                        </div>
                        <!-- Footer Subscribe Description -->
                        <p class="wow fadeInUp" data-wow-delay="0.4s">Subscribe now and be the first to find about our latest products!</p>
                        <!-- Footer Socials -->
                        <div class="footer_social">
                            <ul>
                                <li class="wow fadeInUp" data-wow-delay="0.5s"><a href=""><i class="ti-facebook"></i></a></li>
                                <li class="wow fadeInUp" data-wow-delay="0.6s"><a href=""><i class="ti-twitter-alt"></i></a></li>
                                <li class="wow fadeInUp" data-wow-delay="0.7s"><a href=""><i class="ti-linkedin"></i></a></li>
                                <li class="wow fadeInUp" data-wow-delay="0.8s"><a href=""><i class="ti-github"></i></a></li>
                                <li class="wow fadeInUp" data-wow-delay="0.9s"><a href=""><i class="ti-pinterest"></i></a></li>
                            </ul>
                        </div>
                        <!-- Footer Section Copyright -->
                        <span class="wow fadeInUp" data-wow-delay="1s">Copyright © 2019, Crypto ICO. Developed By <a href="" target="blank">Varun Bhole</a></span>
                    </div>
                </div>
            </div>
        </div>
    </footer>
   <!-- Body Left Social- Fix item -->
    <nav class="body_left_social">
        <ul>
            <li><a href=""><i class="fab fa-telegram"></i></a></li>
            <li><a href=""><i class="fab fa-medium"></i></a></li>
            <li><a href=""><i class="fab fa-twitter"></i></a></li>
            <li><a href=""><i class="fab fa-github"></i></a></li>
        </ul>
    </nav>
    <!-- Script Dependencies - Jquery, Popper, bootstrap, jquery waypoints, font-awesome, flipclock, slick, midnight, bootstrap, wow js -->
    <script src="js/jquery-3.4.1.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/jquery.waypoints.min.js"></script>
    <script src="js/all.min.js"></script>
    <script src="js/flipclock.min.js"></script>
    <script src="js/slick.min.js"></script>
    <script src="js/midnight.jquery.min.js"></script>
    <script src="js/bootstrap-notify.min.js"></script>
    <script src="js/wow.min.js"></script>
    <!-- Main Scripts -->
    <script src="js/main.js"></script>
</body>
<script src="https://www.cryptohopper.com/widgets/js/script"></script>
</html>
