const FooterBar = () => {
    return ( 
        <footer className="footerBar">
           <div className="socialMediaPart"> 
           
                <div> Social Media:</div>
                <div className="linksCollection">
                    <div className="socialMediaLinksDivBorder">
                        <a href="https://www.instagram.com/buenardiuum_peeu/">
                                <img src="./images/instagram.png" alt="" />
                        </a>
                    </div>
                    <div className="socialMediaLinksDivBorder"> 
                        <a href="https://github.com/mariano-paporello">
                            <img src="./images/github-logo.png" alt="" />
                        </a>
                        
                    </div>
                    <div className="socialMediaLinksDiv">
                        <a href="https://www.linkedin.com/in/mariano-paporello-0924b8166/">
                            <img src="./images/linkedin-icon.png" alt="" />
                        </a> 
                    </div>
                </div>
            
            </div>
           <div className="copyRightPart">
            Copyright Corte Drinks - 2022. All rights reserved. Defense of the consumers.   
           </div>
           <div className="ContactUsPart">
                Contact Us: 
                <div className="flex contactUsLinks">
                    <div className="contactUsLinkBorder"><a href="https://wa.me/5491165551861?text=Duda%20o%20consulta%20porfavor%20escribanos%20por%20aqu%C3%AD.">WhatsApp </a> </div>
                    <div><a href="mailto:mariano.paporello@gmail.com?Subject=Duda%20o%20consulta%20porfavor%20escribanos%20por%20aqui">Gmail</a></div>
                </div>
            </div>
        </footer>
     );
}
 
export default FooterBar;