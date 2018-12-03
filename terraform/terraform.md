# Terraform

## Azure

```terraform
provider "azurerm" {
  
}
```

```terraform
resource "random_id" "serverName" {
  keepers = {
      azi_id = 1
  }
  byte_length = 8
}
resource "azurerm_resource_group" "dev-rg" {
  name = "dev-rg"
  location = "North Central US"
}

resource "azurerm_app_service_plan" "dev-asp" {
    name = "dev-asp"
    location = "${azurerm_resource_group.dev-rg.location}"
    resource_group_name = "${azurerm_resource_group.dev-rg.name}"
    sku {
        tier = "Standard"
        size = "S1"
    }
}

resource "azurerm_app_service" "dev-api" {
    name = "dev-api"
    location = "${azurerm_resource_group.dev-rg.location}"
    resource_group_name = "${azurerm_resource_group.dev-rg.name}"
    app_service_plan_id = "${azurerm_app_service_plan.dev-asp.id}"
    site_config {
        dotnet_framework_version = "v4.0"
        default_documents = ["Default.htm","Default.html","Default.asp","index.htm","index.html","iisstart.htm","default.aspx","index.php","hostingstart.html"]
        always_on = "true"
        use_32_bit_worker_process = "true"
        websockets_enabled = "true"
    }
    app_settings {    }

    connection_string {
        name = "CustomerStorageAccount"
        value = ""
        type = "Custom"
    }
    connection_string {
        name = "DiagnosticStorageAccount"
        type = "Custom"
        value = ""
    }
    connection_string {
        name = "AzureWebJobsDashboard"
        type = "Custom"
        value = ""
    }
    connection_string {
        name = "AzureWebJobsStorage"
        type = "Custom"
        value = ""
    }
}
```