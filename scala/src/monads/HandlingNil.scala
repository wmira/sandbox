package monads

import scala.language.dynamics

/**
 * Handling Null from Tom Stuart's Monad Talk
 *
 *
 * https://www.youtube.com/watch?v=uTR__8RvgvM
 *
 */
object HandlingNil {

  def main(args : Array[String]): Unit = {
    val project = Project(Creator(Address(Country(City("SUNNY")))))



    println(getProjectWeatherNotNullSafe(project))

    val brokenProject = Project(Creator(null))
    try {
      println(getProjectWeatherNotNullSafe(brokenProject))
    } catch {
      case e : Exception => (println("Error caught"))
    }

    println(getProjectWeatherBad(brokenProject))

    val optionalCustomer = Optional[Project](Project(null))
    println(optionalCustomer.creator().value)

    println(getProjectWeatherOption(project))
    println(getProjectWeatherOption(brokenProject))
  }

  def getProjectWeatherNotNullSafe(project : Project) : String = {
    project.creator.address.country.capital.weather
  }
  def getProjectWeatherOption(project: Project) : String = {
    Optional(project).creator().address().country().capital().weather().value + ""
  }
  def getProjectWeatherBad(project : Project) : String = {
    if ( project != null ) {
      if (project.creator != null) {
        if (project.creator.address != null) {
          if (project.creator.address.country != null) {
            if (project.creator.address.country.capital != null) {
              return project.creator.address.country.capital.weather
            }
          }
        }
      }
    }
    return null
  }


}

class Optional[Any](val value : Any) extends Dynamic{

  def applyDynamic(methodName: String)(args: Any*)  : Optional[_] = {
    if ( value == null ) {
      Optional(this.value)
    } else {
      val method = value.getClass.getMethods.filter( m => m.getName.equals(methodName))(0)
      Optional(method.invoke(this.value))
    }
  }

  def selectDynamic(attributeName : String)() : Optional[_] = {
    if ( this.value == null ) {
      Optional(this.value)
    } else {

      val field = value.getClass.getDeclaredFields().filter( field => field.getName.equals(attributeName) )(0)
      field.setAccessible(true)
      if ( field.get(this) != null ) {
        return Optional(field.get(this))
      } else {
        return Optional(null)
      }
    }
  }

}
object Optional {
  def apply[Any](value : Any) : Optional[Any] = {
    new Optional[Any](value)
  }


}


class City(val weather : String  )
object City {
  def apply(weather : String): City = {
    new City(weather)
  }
}

class Country(val capital : City)
object Country {
  def apply(capital: City) : Country = {
    new Country(capital)
  }
}


class Address(val country : Country)
object Address {
  def apply(country : Country): Address = {
    new Address(country)
  }
}

class Creator(val address : Address)
object Creator {
  def apply(address : Address) : Creator = {
    new Creator(address)
  }
}

class Project(val creator : Creator)
object Project {
  def apply(creator : Creator) : Project = {
    new Project(creator)
  }
}