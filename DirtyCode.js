<div>
<label className="form-titol-label" htmlFor="flexCheckChecked">
  Que vols fer?
  </label>
</div>
<div className="form-check">
<input
  className="form-check-Web"
  type="checkbox"
  defaultValue=""
  id="checkWeb"
/>
<label className="form-check-label" htmlFor="flexCheckDefault">
  Una pàgina web 500€
</label>
</div>
<div className="form-check">
<input
  className="form-check-Seo"
  type="checkbox"
  defaultValue=""
  id="checkSeo"
  defaultChecked=""
/>
<label className="form-check-label" htmlFor="flexCheckChecked">
Una consultoria SEO 300€
</label>
</div>
<div className="form-check">
<input
  className="form-check-Ads"
  type="checkbox"
  defaultValue= "300"
  id="checkAds"
  defaultChecked=""
  onChange={()=>calculate(checkAds.id)}
/>
<label className="form-check-label" htmlFor="flexCheckChecked">
Una campanya de Gogle Ads 200€
</label>
</div>
<div>
<label className="form-total-label" htmlFor="flexCheckChecked">
Preu: 800€
</label>
</div>