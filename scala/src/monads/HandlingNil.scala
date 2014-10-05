package monads

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

    println(getProjectWeather(project))

    val brokenProject = Project(Creator(null))
    println(getProjectWeather(brokenProject))
  }

  def getProjectWeather(project : Project) : String = {
    project.creator.address.country.capital.weather
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