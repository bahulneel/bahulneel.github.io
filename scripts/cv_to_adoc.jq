def cv_to_adoc:
  "
  = \(.basics.name)
  Email: \(.basics.email) | GitHub: (\(.basics.profiles[] | select(.network == \"GitHub\") | .url)) | Medium: (\(.basics.profiles[] | select(.network == \"Medium\") | .url)) | LinkedIn: (\(.basics.profiles[] | select(.network == \"LinkedIn\") | .url)) | \(.basics.location.city), \(.basics.location.country) | \(.basics.phone)

  == Professional Summary

  \((.basics.subjectOf // []) | map(select((.["@type"] | if type == "array" then . else [.] end) | index("WebSite"))) | .[0].text // .[0].description)

  == Professional Experience
  " +
  (.work[] | "
  === \(.company)
  *\(.position)*
  _\(.startDate) - \(.endDate)_

  " + (.highlights | map("- \(.)") | join("\n"))
  ") +
  "
  == Technical Skills

  " + 
  (.skills[] | "**\(.name):** " + (.keywords | join(", ")) + ".\n") +
  " == Education" +
  (.education[] | "
  **\(.studyType) in \(.area)**
  \(.institution)
  ")
