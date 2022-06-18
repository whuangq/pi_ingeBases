﻿using Microsoft.AspNetCore.Mvc;
using planilla_backend_asp.net.Models;
using planilla_backend_asp.net.Handlers;

namespace planilla_backend_asp.net.Controllers
{
  [Route("api/")]
  [ApiController]
  public class VoluntaryDeductionsController : ControllerBase
  {
    [HttpPost]
    [Route("voluntaryDeductions")]
    public ActionResult CreateVoluntaryDeduction([FromBody] VoluntaryDeductionsModel voluntaryDeductions)
    {
      // Create new benefit
      VoluntaryDeductionsHandler handler = new VoluntaryDeductionsHandler();
      handler.CreateVoluntaryDeductions(voluntaryDeductions);
      return Ok();
    }

    [HttpGet]
    [Route("voluntaryDeductions")]
    public ActionResult GetVoluntaryDeductions(string project, string employerID)
    {
      var handler = new VoluntaryDeductionsHandler();
      var data = handler.GetVoluntaryDeductionsData(project, employerID);
      return Ok(data);
    }
  }
}