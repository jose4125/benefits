package controllers

import javax.inject.{Inject, Singleton}

import play.api.mvc.{Action, Controller}

@Singleton
class Benefits @Inject() extends Controller {

  def list = Action { implicit request =>
    Ok("Listing")
  }
  def details(slug: String) = Action { implicit request =>
    import play.api.libs.json.Json

    val success = Map("benefit" -> slug, "votes" -> "0", "open" -> "true")
    val json = Json.toJson(success)
    Ok(json)
  }
  def update(slug: String) = Action { implicit request =>
    NotImplemented
  }
  def vote = Action { implicit request =>
    NotImplemented
  }
}
