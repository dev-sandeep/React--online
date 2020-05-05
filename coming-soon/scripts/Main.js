function Main() {
    axios({
        method: 'get',
        url: 'http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=0dc8ac7f0e564f7a98de3c56a0d9c640',
    }).then(function (e) {
        console.log(e);
    })
    
    return (<div>
        <div id="wrapper">
            <header>
                <a className="logo" href="index.html"><img src="images/logo.png" alt="logo" title="logo" /></a>
            </header>

            <div id="book">

                <div id="ribbon" className="contact">click me to reveal the contact form</div>
                <div className="top-page"></div>

                <div className="content-page">
                    <div className="top-spiral"></div>
                    <div className="bottom-spiral"></div>

                    <div id="cform">
                        <div className="row"></div>
                        <h3>Get in touch with us:</h3>
                        <div className="form-wrapper in-touch">
                            <div id="message"></div>
                            <form method="post" action="php/contact.php" name="contactform" id="contactform">
                                <input type="text" name="name" placeholder="Name" id="name" />
                                <input type="text" name="email" placeholder="Email" id="email" />
                                <input type="text" name="phone" placeholder="Phone" id="phone" />
                                <input type="text" name="subject" placeholder="Subject" id="subject" />
                                <textarea placeholder="Message" name="comments" id="comments"></textarea>
                                <div id="captcha">
                                    <span>3+1=</span>
                                    <input type="text" name="verify" id="verify" />
                                </div>

                                <input type="submit" name="send" value="SEND" id="submit" className="orange" />
                            </form>
                        </div>
                    </div>
                    <div id="home">
                        <div className="row"></div>
                        <h2>We're currently under construction!</h2>
                        <div className="row"></div>
                        <div className="row"></div>
                        <h3>We`re working hard and believe we`ll launch the website <b>as soon as possible</b></h3>

                        <div id="countdown"></div>
                        <div className="clear"></div>
                        <div className="row"></div>
                        <div className="form-wrapper email-list">
                            <div id="mesaj"></div>
                            <form id="subscribe" method="post" action="php/subscribe.php" name="subscribe">
                                <input type="text" id="semail" name="YourEmail" placeholder="Subscribe to our email list" />

                                <input type="submit" id="ssubmit" name="subscribe" value="SUBSCRIBE" className="orange" />
                            </form>
                        </div>
                    </div>
                </div>

                <div className="bottom-page">
                    <ul className="social">

                        <li><a className="facebook tooltip" href="#" title="Facebook"></a></li>
                        <li><a className="twitter tooltip" href="#" title="Twitter"></a></li>
                        <li><a className="youtube tooltip" href="#" title="YouTube"></a></li>
                        <li><a className="skype tooltip" href="#" title="Skype"></a></li>
                        <li><a className="dribbble tooltip" href="#" title="Dribbble"></a></li>

                        {/* <li><a className="digg tooltip" href="#" title="Digg"></a></li>
					<li><a className="delicious tooltip" href="#" title="Delicious"></a></li>
					<li><a className="vimeo tooltip" href="#" title="Vimeo"></a></li>
					<li><a className="dropbox tooltip" href="#" title="DropBox"></a></li>		 */}

                    </ul>
                </div>
            </div>

            <p className="copyright">Copyright &copy; PaperLaunch - All Rights Reserved</p>

        </div>
    </div>);
}