import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SiteInfoForm({ formData, handleInputChange }) {
    return (
        <div className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="site_name">Site Name</Label>
                <Input
                    id="site_name"
                    name="site_name"
                    value={formData.site_name}
                    onChange={handleInputChange}
                    required
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="company_name">Company Name</Label>
                <Input
                    id="company_name"
                    name="company_name"
                    value={formData.company_name}
                    onChange={handleInputChange}
                    required
                />
            </div>
        </div>
    );
}
